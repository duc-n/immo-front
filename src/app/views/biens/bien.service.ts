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

const companyData = [];

@Injectable({
  providedIn: 'root'
})
export class BienService {

  constructor(
    private readonly fb: FormBuilder,
    private readonly http: HttpClient
  ) { }

  getBienForm() {
    return this.getBien().pipe(
      map((bien: Bien) => this.fb.group({
        consultants: this.generateConsultants(bien.consultant, bien.consultantsAssocies),
        detailBien: this.fb.group({
          'typeBien': [bien.detailBien.typeBien],
          'activite': [bien.detailBien.activite],
          'nomMagasin': [bien.detailBien.nomMagasin],
          'enseigneProximite': [bien.detailBien.enseigneProximite],
          'activites': this.generateActivitesForm(bien.detailBien.activites),
          'adresseBien': this.generateAdresseBienForm(bien.detailBien.adresseBien)
        }),
        bail: this.generateBailForm(bien.bail),
        conditionsFinancieres: this.generateConditionsFinancieres(bien.conditionsFinancieres),
        visite: this.generateVisite(bien.visite),
        descriptif: this.generateDescriptif(bien.descriptif),
        communication: this.generateCommunication(bien.communication),
        surface: this.generateSurface(bien.surface),
        contacts: this.fb.group({
          'clientName': [],
          'contacts': this.generateContacts(bien.contacts)
        })
      })
      )
    );
  }
  private generateConsultants(consultant: Consultant, consultantsAssocies: Consultant[]) {
    return this.fb.group({
      id: [consultant.id],
      nom: [consultant.nom],
      prenom: [consultant.prenom],
      tel: [consultant.tel],
      email: [consultant.email],
      consultantsAssocies: this.generateConsultantsAssocies(consultantsAssocies)
    });
  }

  private generateConsultantsAssocies(consultants: Consultant[]) {

    const consultantForm = this.fb.array((() => {
      if (!consultants) {
        return [];
      }
      return consultants.map((consultant) => this.createConsultant(consultant));
    })());

    return consultantForm;
  }
  createConsultant(consultant: Consultant) {
    return this.fb.group({
      id: [consultant.id],
      nom: [consultant.nom],
      prenom: [consultant.prenom],
      tel: [consultant.tel],
      email: [consultant.email],
      commission: [consultant.commission]
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

  private getBien(): Observable<any> {
    // Call the mock webService
    return this.http.get('/assets/bien.json');

    // Call the real webservice
    //return this.http.get('http://immo-backend.eu-west-3.elasticbeanstalk.com/bien/5da784a39f14661eaf69684b');

  }

  /**
     * A method that mocks a paged server response
     * @param page The selected page
     * @returns {any} An observable containing the employee data
     */
  public getResults(page: Page): Observable<PagedData<Bien>> {
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
    return this.http.post<any>('http://localhost:8080/bien/rechercherBien', bienCritere);
    //  .subscribe(
    //     data => {
    //       console.log("POST Request is successful ", data);
    //     },
    //     error =>  {

    //       console.log("Error", error);

    //     })
    //   ;
  }

  saveBien(bien: Bien) {
    console.log('Save Bien');
    return this.http.post<any>('http://localhost:8080/bien/updateBien', bien);
  }

}
