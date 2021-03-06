import { Injectable } from '@angular/core';
import { Acquereur } from './models/acquereur';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/client';
import { Commercial } from 'src/app/shared/models/commercial';
import { InformationSupplementaires } from 'src/app/shared/models/informations-supplementaires';
import { Activite } from 'src/app/shared/models/activite';
import { Consultant } from 'src/app/shared/models/consultant';
import { ConsultantDB } from 'src/app/shared/inmemory-db/consultants';



@Injectable({
  providedIn: 'root'
})
export class AcquereurService {

  console = console;

  constructor(
    private readonly fb: FormBuilder,
    private readonly http: HttpClient
  ) { }

  getAcquereurForm() {

    return this.getAcquereur().pipe(
      map((acquereur: Acquereur) => this.fb.group({
        client: this.generateClientForm(acquereur.acquereurDetail),
        commerciaux: this.generateCommercialForm(acquereur.commerciaux),
        consultants: this.generateConsultants(acquereur.consultant, acquereur.consultantsAssocies),
        informationsSupplementaires: this.generateInformations(acquereur.informationsSupplementaires)
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
      'recevoirAlertEmail': [client.recevoirAlertEmail],
    });

    return clientForm;
  }

  private generateCommercialForm(commerciaux: Commercial[]) {

    const commerciauxForm = this.fb.group({

      commerciaux: this.fb.array((() => {
        if (!commerciaux) {
          return [];
        }
        return commerciaux.map((commercial) => this.createClient(commercial));
      })())

    });
    return commerciauxForm;
  }


  private generateConsultants(consultant: Consultant, consultantsAssocies: Consultant[]) {
    return this.fb.group({
      id: [consultant.id],
      nom: [consultant.nom],
      prenom: [consultant.prenom],
      telephone: [consultant.telephone],
      username: [consultant.username],
      consultantAssocie: [],
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
      telephone: [consultant.telephone],
      username: [consultant.username]
    });
  }

  createClient(commercial: Commercial) {
    return this.fb.group({
      nom: [commercial.nom],
      prenom: [commercial.prenom],
      commission: this.fb.group({
        'pourcentage': [commercial.commission.pourcentage]
      })
    });
  }


  private generateInformations(informations: InformationSupplementaires) {

    const informationsForm = this.fb.group({
      'numMobile': [informations.numMobile],
      'numFixe': [informations.numFixe],
      'numFax': [informations.numFax],
      'numAutre': [informations.numAutre],
      activites: this.generateActivites(informations.activites)
    });
    return informationsForm;
  }

  generateActivites(activites: Activite[]) {
    return this.fb.group({
      activite: [],
      activites: this.fb.array((() => {
        if (!activites) {
          return [];
        }
        return activites.map((activite) => this.createActivite(activite));
      })())
    });

  }
  createActivite(activite: Activite) {
    return this.fb.group({
      id: [activite.id],
      libelle: [activite.libelle]
    });
  }

  private getAcquereur(): Observable<any> {
    // Call the mock webService
    return this.http.get('/assets/acquereur.json');

    // Call the real webservice
    //return this.http.get('http://immo-backend.eu-west-3.elasticbeanstalk.com/bien/5da784a39f14661eaf69684b');
  }


}
