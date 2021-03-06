import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Activites } from './models/activites';
import { Bien } from './models/bien';
import { AdresseBien } from './models/adresse-bien';
import { Emplacements } from './models/emplacements';
import { Bail } from './models/bail';
import { ConditionsFinancieres } from './models/conditions-financieres';
import { Visite } from './models/visite';
import { Descriptif } from './models/descriptif';
import { Communication } from './models/communication';
import { Surface } from './models/surface';
import { Observable } from 'rxjs/internal/Observable';
import { Page } from 'src/app/shared/models/page';
import { PagedData } from 'src/app/shared/models/paged-data';
import { of } from 'rxjs';
import { Client } from 'src/app/shared/models/client';
import { Consultant } from 'src/app/shared/models/consultant';
import { ConsultantDB } from 'src/app/shared/inmemory-db/consultants';
import { BienCritere } from './models/search/bien-critere';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { NGXLogger } from 'ngx-logger';
import { REST_URLS } from 'src/app/shared/constants/rest-urls';
import { ConsultantAssocie } from 'src/app/shared/models/consultantAssocie';
import { Photo } from './models/photo';
import { DetailBien } from './models/detail-bien';

const companyData = [];

@Injectable({
  providedIn: 'root'
})
export class BienService {

  constructor(
    private readonly logger: NGXLogger,
    private readonly fb: FormBuilder,
    private readonly http: HttpClient,
    private readonly dataLayerService: DataLayerService
  ) { }

  createBienForm() {
    return this.createBien().pipe(
      map((bien: Bien) => this.generateBien(bien)
      )
    );
  }

  getBienForm(id: string) {
    this.logger.debug('Get bien form. id =', id);
    return this.getBien(id).pipe(
      map((bien: Bien) => this.generateBien(bien)
      )
    );
  }

  private generateBien(bien: Bien) {
    return this.fb.group({
      id: bien.id,
      consultants: this.generateConsultants(bien.consultant, bien.consultantsAssocies),
      detailBien: this.generateDetailBienForm(bien.detailBien),
      bail: this.generateBailForm(bien.bail),
      conditionsFinancieres: this.generateConditionsFinancieres(bien.conditionsFinancieres),
      visite: this.generateVisite(bien.visite),
      descriptif: this.generateDescriptif(bien.descriptif),
      communication: this.generateCommunication(bien.communication),
      surface: this.generateSurface(bien.surface),
      contacts: this.fb.group({
        'clientName': [],
        'contacts': this.generateContacts(bien.contacts)
      }),
      photos: this.generatePhotos(bien.photos)
    });
  }

  private generateConsultants(consultant: Consultant, consultantsAssocies: ConsultantAssocie[]) {
    return this.fb.group({
      id: [consultant.id],
      nom: [consultant.nom],
      prenom: [consultant.prenom],
      telephone: [consultant.telephone],
      username: [consultant.username],
      consultantsAssocies: this.generateConsultantsAssocies(consultantsAssocies)
    });
  }

  private generateConsultantsAssocies(consultantsAssocies: ConsultantAssocie[]) {

    const consultantForm = this.fb.array((() => {
      if (!consultantsAssocies) {
        return [];
      }
      return consultantsAssocies.map((consultantAssocie) => this.createConsultant(consultantAssocie));
    })());

    return consultantForm;
  }
  createConsultant(consultantAssocie: ConsultantAssocie) {
    return this.fb.group({
      id: [consultantAssocie.consultant.id],
      nom: [consultantAssocie.consultant.nom],
      prenom: [consultantAssocie.consultant.prenom],
      telephone: [consultantAssocie.consultant.telephone],
      username: [consultantAssocie.consultant.username],
      commission: [consultantAssocie.commission]
    });
  }

  private generateActivitesForm(activities: Activites) {

    const activitiesForm = this.fb.group({
      'licence': [activities.licence],
      'liquidationJudiciaire': [activities.liquidationJudiciaire],
      'popupStore': [activities.popupStore],
      'restaurantConduitChemine': [activities.restaurantConduitChemine],
      'restaurantSansNuisance': [activities.restaurantSansNuisance],
      'terrasse': [activities.terrasse]
    });

    return activitiesForm;
  }

  private generateAdresseBienForm(adresseBien: AdresseBien) {

    const adresseBienForm = this.fb.group({
      'adresse': [adresseBien.adresse],
      'ville': [adresseBien.ville],
      'codePostal': [adresseBien.codePostal],
      'quatier': [adresseBien.quatier],
      'metro': [adresseBien.metro],
      'rer': [adresseBien.rer],
      'bus': [adresseBien.bus],
      'parking': [adresseBien.parking],
      'origine': [adresseBien.origine],
      'emplacements': this.generateEmplacementsForm(adresseBien.emplacements)
    });

    return adresseBienForm;
  }

  private generateEmplacementsForm(emplacements: Emplacements) {

    const emplacementsForm = this.fb.group({
      'aDefinir': [emplacements ? emplacements.aDefinir : null],
      'numero1': [emplacements ? emplacements.numero1 : null],
      'numero1Alimentaire': [emplacements ? emplacements.numero1Alimentaire : null],
      'numero1PretPorter': [emplacements ? emplacements.numero1PretPorter : null],
      'rueCommercante': [emplacements ? emplacements.rueCommercante : null],
      'fluxPietons': [emplacements ? emplacements.fluxPietons : null],
      'axeVoiture': [emplacements ? emplacements.axeVoiture : null],
      'ruePietonne': [emplacements ? emplacements.ruePietonne : null],
      'zoneTouristique': [emplacements ? emplacements.zoneTouristique : null],
      'zoneBureau': [emplacements ? emplacements.zoneBureau : null],
      'zoneResidentielle': [emplacements ? emplacements.zoneResidentielle : null],
      'centreCommercial': [emplacements ? emplacements.centreCommercial : null],
      'zac': [emplacements ? emplacements.zac : null]
    });

    return emplacementsForm;
  }

  private generateBailForm(bail: Bail) {

    const bailForm = this.fb.group({
      'typeBail': [bail.typeBail],
      'bailNotarie': [bail.bailNotarie],
      'chargeMensuel': [bail.chargeMensuel],
      'periodLoyer': [bail.periodLoyer],
      'depotGarantie': [bail.depotGarantie],
      'cautionSup': [bail.cautionSup],
      'taxFonctiere': [bail.taxFonctiere],
      'paiementTaxFonctiere': [bail.paiementTaxFonctiere],
      'paiement606': [bail.paiement606]
    });

    return bailForm;
  }

  private generateDetailBienForm(detailBien: DetailBien) {

    const detailBienForm = this.fb.group({
      'typeBien': [detailBien.typeBien],
      'activite': [detailBien.activite],
      'nomMagasin': [detailBien.nomMagasin],
      'enseigneProximite': [detailBien.enseigneProximite],
      'activites': this.generateActivitesForm(detailBien.activites),
      'adresseBien': this.generateAdresseBienForm(detailBien.adresseBien)
    });

    return detailBienForm;
  }


  private generateConditionsFinancieres(conditionsFinancieres: ConditionsFinancieres) {

    const conditionsFinancieresForm = this.fb.group({

      'conditionsFinancieres': [conditionsFinancieres.conditionsFinancieres],
      'honorairesAgence': [conditionsFinancieres.honorairesAgence],
      'paiementHonoraires': [conditionsFinancieres.paiementHonoraires],
      'tvaLoyer': [conditionsFinancieres.tvaLoyer]
    });

    return conditionsFinancieresForm;
  }


  private generateVisite(visite: Visite) {
    const visiteForm = this.fb.group({
      'cle': [visite.cle],
      'commentaire': [visite.commentaire],
      'digicode1': [visite.digicode1],
      'digicode2': [visite.digicode2],
      'interphone': [visite.interphone],
      'etage': [visite.interphone]
    });
    return visiteForm;
  }

  private generateDescriptif(descriptif: Descriptif) {

    const descriptifForm = this.fb.group({

      'localIdealPour': [descriptif.localIdealPour],
      'longueurFacade': [descriptif.longueurFacade],
      'facadeAngle': [descriptif.facadeAngle],
      'description': [descriptif.description],
      'espaceExterieur': [descriptif.espaceExterieur],
      'hsp2m80': [descriptif.hsp2m80],
      'pointEau': [descriptif.pointEau],
      'wc': [descriptif.wc],
      'disponible': [descriptif.disponible],
      'noteConfidentielle': [descriptif.noteConfidentielle]

    });

    return descriptifForm;
  }

  private generateCommunication(communication: Communication) {

    const communicationForm = this.fb.group({

      'siteWeb': [communication.siteWeb],
      'parselle': [communication.parselle],
      'bureauLocal': [communication.bureauLocal],
      'groupeSeloger': [communication.groupeSeloger],
      'lebonCoin': [communication.lebonCoin],
      'territoireMaking': [communication.territoireMaking],
      'transactionCommerce': [communication.transactionCommerce],
      'alertesEmailRapprochement': [communication.alertesEmailRapprochement],
      'informationsMandats': [communication.informationsMandats]

    });
    return communicationForm;
  }

  private generateSurface(surface: Surface) {

    const surfaceForm = this.fb.group({
      'surfaceRDC': [surface.surfaceRDC],
      'surfaceRDCFonderee': [surface.surfaceRDCFonderee],
      'surfaceVente': [surface.surfaceVente],
      'surfaceSousSol': [surface.surfaceSousSol],
      'surfaceSousSolFonderee': [surface.surfaceSousSolFonderee],
      'surface1Etage': [surface.surface1Etage],
      'surface1Fonderee': [surface.surface1Fonderee],
      'surfaceAutre': [surface.surfaceAutre],
      'surfaceTotale': [surface.surfaceTotale],
      'surfaceFonderee': [surface.surfaceFonderee],
      'nouvelleSurfaceFonderee': [surface.nouvelleSurfaceFonderee]

    });
    return surfaceForm;
  }

  private generatePhotos(photos: Photo[]) {

    const photosForm = this.fb.array((() => {
      if (!photos) {
        return [];
      }
      return photos.map((photo) => this.createPhoto(photo));
    })());

    return photosForm;
  }

  createPhoto(photo: Photo) {
    return this.fb.group({
      url: [photo.url]
    });
  }

  private generateContacts(contacts: Client[]) {

    const contactsForm = this.fb.array((() => {
      if (!contacts) {
        return [];
      }
      return contacts.map((client) => this.createClient(client));
    })());

    return contactsForm;
  }

  createClient(client: Client) {
    return this.fb.group({
      nom: [client.nom],
      prenom: [client.prenom]
    });
  }

  private getBien(id: string): Observable<Bien> {
    // Call the mock webService
    return this.dataLayerService.getBien(id);

    // Call the real webservice
    //return this.http.get('http://immo-backend.eu-west-3.elasticbeanstalk.com/bien/5da784a39f14661eaf69684b');

  }

  getBiensEtatCreation(): Observable<any> {
    return this.dataLayerService.getBiensEtatCreation();
  }

  /**
     * A method that mocks a paged server response
     * @param page The selected page
     * @returns {any} An observable containing the employee data
     */
  getResults(page: Page): Observable<PagedData<Bien>> {
    return of(companyData).pipe(map(d => this.getPagedData(page)));
  }

  /**
   * Package companyData into a PagedData object based on the selected Page
   * @param page The page data used to get the selected data from companyData
   * @returns {PagedData<CorporateEmployee>} An array of the selected data and page
   */
  private getPagedData(page: Page): PagedData<Bien> {
    const pagedData = new PagedData<Bien>();
    page.totalElements = companyData.length;
    page.totalPages = page.totalElements / page.size;
    const start = page.pageNumber * page.size;
    const end = Math.min(start + page.size, page.totalElements);
    for (let i = start; i < end; i++) {
      const jsonObj = companyData[i];
      const employee = null;
      pagedData.data.push(employee);
    }
    pagedData.page = page;
    return pagedData;
  }

  rechercherBien(bienCritere: BienCritere) {

    console.log(bienCritere);
    //return this.http.get<any>('/api/rechercherBien/');
    return this.dataLayerService.rechercherBien(bienCritere);
    //  .subscribe(
    //     data => {
    //       console.log("POST Request is successful ", data);
    //     },
    //     error =>  {

    //       console.log("Error", error);

    //     })
    //   ;
  }

  private createBien() {
    return this.dataLayerService.create(REST_URLS.BIEN_CREATE);
  }

  saveBien(bien: Bien) {
    this.dataLayerService.update(REST_URLS.BIEN_UPDATE, bien).subscribe(result => {
      console.log('Bien updated !!!');
    });
  }

}
