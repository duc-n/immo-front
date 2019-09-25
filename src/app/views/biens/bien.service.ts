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
        adresseBien: this.fb.group({
          adresse: [apiResponse.adresse],
          ville: [apiResponse.ville],
          codePostal: [apiResponse.codePostal],
          quatier: [apiResponse.quatier],
          metro: [apiResponse.metro],
          rer: [apiResponse.rer],
          bus: [apiResponse.bus],
          parking: [apiResponse.parking],
          typeBien: [apiResponse.typeBien],
          activite: [apiResponse.activite],
          nomMagasin: [apiResponse.nomMagasin],
          enseigneProximite: [apiResponse.enseigneProximite],
          activites: this.fb.group({

          }),
          emplacements: this.fb.group({

          })

        }),
      }))
    );
  }

  private getBien() {
    return this.http.get('/assets/bien.json');
  }


}
