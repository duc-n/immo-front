import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

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
      map((apiResponse: any) => this.fb.group({
        nomTitulaire: [apiResponse.nomTitulaire],
        detailBien: this.fb.group({
          'typeBien': [apiResponse.typeBien],
          'activite': [apiResponse.activite],
          'nomMagasin': [apiResponse.nomMagasin],
          'enseigneProximite': [apiResponse.enseigneProximite],
          'adresseBien': this.fb.group({
            'adresse': [apiResponse.adresseBien.adresse],
            'ville': [apiResponse.adresseBien.ville],
            'codePostal': [apiResponse.adresseBien.codePostal],
            'quatier': [apiResponse.adresseBien.quatier],
            'metro': [apiResponse.adresseBien.metro],
            'rer': [apiResponse.adresseBien.rer],
            'bus': [apiResponse.adresseBien.bus],
            'parking': [apiResponse.adresseBien.parking],
            'origine': [apiResponse.adresseBien.origine],
            'emplacements': {
              'aDefinir': [apiResponse.emplacements.aDefinir],
              'numero1': [apiResponse.emplacements.numero1],
              'numero1Alimentaire': [apiResponse.emplacements.numero1Alimentaire],
              'numero1PretPorte': [apiResponse.emplacements.numero1PretPorte],
              'empRueCommercante': [apiResponse.emplacements.empRueCommercante],
              'fluxPietons': [apiResponse.emplacements.fluxPietons],
              'axeVoitures': [apiResponse.emplacements.axeVoitures],
              'ruePietonne': [apiResponse.emplacements.ruePietonne],
              'zoneTouristique': [apiResponse.emplacements.zoneTouristique],
              'zoneBureau': [apiResponse.emplacements.zoneBureau],
              'zoneResidentiel': [apiResponse.emplacements.zoneResidentiel],
              'zoneCommercial': [apiResponse.emplacements.zoneCommercial],
              'zac': [apiResponse.emplacements.zac]
            }
          }),
        }),
      }))
    );
  }

  private getBien() {
    return this.http.get('/assets/bien.json');
  }


}
