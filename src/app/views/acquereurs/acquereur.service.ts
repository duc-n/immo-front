import { Injectable } from '@angular/core';
import { Acquereur } from './models/acquereur';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/client';


@Injectable({
  providedIn: 'root'
})
export class AcquereurService {

  constructor(
    private readonly fb: FormBuilder,
    private readonly http: HttpClient
  ) { }

  getAcquereurForm() {

    return this.getAcquereur().pipe(
      map((acquereur: Acquereur) => this.fb.group({
        client: this.generateClientForm(acquereur.client)
      })
      )
    );

  }

  private generateClientForm(client: Client) {

    const clientForm = this.fb.group({
      'nom': [client.nom],
      'prenom': [client.prenom],
      'typeClient': [client.typeClient],
      'typeContact': [client.typeContact],
      'civilite': [client.civilite],
      'societeEnCreation': [client.societeEnCreation],
      'societe': [client.societe],
      'tel': [client.tel],
      'email': [client.email],
      'emailSup': [client.emailSup],
      'activite': [client.activite],
      'origine': [client.origine],
      'topAcquereur': [client.topAcquereur],
      'demandeRDV': [client.demandeRDV],
      'newsLetter': [client.newsLetter],
      'consentementRGPD': [client.consentementRGPD],
      'recevoirAlertEmail': [client.recevoirAlertEmail]
    });

    return clientForm;
  }


  private getAcquereur(): Observable<any> {
    // Call the mock webService
    return this.http.get('/assets/acquereur.json');

    // Call the real webservice
    //return this.http.get('http://immo-backend.eu-west-3.elasticbeanstalk.com/bien/5da784a39f14661eaf69684b');
  }


}
