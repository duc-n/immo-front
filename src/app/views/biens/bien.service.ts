import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Activites } from './models/activites';
import { Bien } from './models/bien';
import { AdresseBien } from './models/adresse-bien';
import { Emplacements } from './models/emplacements';
import { Bail } from './models/bail';

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
        bail: this.generateBailForm(bien.bail)

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

    });

    return bailForm;
  }
  private getBien() {
    return this.http.get('/assets/bien.json');
  }
}
