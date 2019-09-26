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
          'typeBien': [apiResponse.detailBien.typeBien],
          'activite': [apiResponse.detailBien.activite],
          'nomMagasin': [apiResponse.detailBien.nomMagasin],
          'enseigneProximite': [apiResponse.detailBien.enseigneProximite],
          'adresseBien': this.fb.group({
            'adresse': [apiResponse.detailBien.adresseBien.adresse],
            'ville': [apiResponse.detailBien.adresseBien.ville],
            'codePostal': [apiResponse.detailBien.adresseBien.codePostal],
            'quatier': [apiResponse.detailBien.adresseBien.quatier],
            'metro': [apiResponse.detailBien.adresseBien.metro],
            'rer': [apiResponse.detailBien.adresseBien.rer],
            'bus': [apiResponse.detailBien.adresseBien.bus],
            'parking': [apiResponse.detailBien.adresseBien.parking],
            'origine': [apiResponse.detailBien.adresseBien.origine],
            'emplacements': {
              'aDefinir': [apiResponse.detailBien.adresseBien.emplacements.aDefinir],
              'numero1': [apiResponse.detailBien.adresseBien.emplacements.numero1],
              'numero1Alimentaire': [apiResponse.detailBien.adresseBien.emplacements.numero1Alimentaire],
              'numero1PretPorte': [apiResponse.detailBien.adresseBien.emplacements.numero1PretPorte],
              'empRueCommercante': [apiResponse.detailBien.adresseBien.emplacements.empRueCommercante],
              'fluxPietons': [apiResponse.detailBien.adresseBien.emplacements.fluxPietons],
              'axeVoitures': [apiResponse.detailBien.adresseBien.emplacements.axeVoitures],
              'ruePietonne': [apiResponse.detailBien.adresseBien.emplacements.ruePietonne],
              'zoneTouristique': [apiResponse.detailBien.adresseBien.emplacements.zoneTouristique],
              'zoneBureau': [apiResponse.detailBien.adresseBien.emplacements.zoneBureau],
              'zoneResidentiel': [apiResponse.detailBien.adresseBien.emplacements.zoneResidentiel],
              'zoneCommercial': [apiResponse.detailBien.adresseBien.emplacements.zoneCommercial],
              'zac': [apiResponse.detailBien.adresseBien.emplacements.zac]
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
