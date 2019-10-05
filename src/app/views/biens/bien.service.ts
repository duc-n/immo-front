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
        nomTitulaire: [bien.nomTitulaire],
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
        surface: this.generateSurface(bien.surface)
      }))
    );
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
      'aDefinir': [emplacements.aDefinir],
      'numero1': [emplacements.numero1],
      'numero1Alimentaire': [emplacements.numero1Alimentaire],
      'numero1PretPorter': [emplacements.numero1PretPorter],
      'rueCommercante': [emplacements.rueCommercante],
      'fluxPietons': [emplacements.fluxPietons],
      'axeVoiture': [emplacements.axeVoiture],
      'ruePietonne': [emplacements.ruePietonne],
      'zoneTouristique': [emplacements.zoneTouristique],
      'zoneBureau': [emplacements.zoneBureau],
      'zoneResidentielle': [emplacements.zoneResidentielle],
      'centreCommercial': [emplacements.centreCommercial],
      'zac': [emplacements.zac]
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


  private getBien() {
    return this.http.get('/assets/bien.json');
  }
}
