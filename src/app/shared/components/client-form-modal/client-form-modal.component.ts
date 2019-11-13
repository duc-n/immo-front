import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Consultant } from '../../models/consultant';

@Component({
  selector: 'app-client-form-modal',
  templateUrl: './client-form-modal.component.html',
  styleUrls: ['./client-form-modal.component.scss']
})
export class ClientFormModalComponent implements OnInit {

  @Input() id: string; // this value will be used in case of editing a client
  @Input() consultants: Consultant[];

  clientForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) {
    this.createClientForm();
  }

  ngOnInit() {
  }

  createClientForm() {
    this.clientForm = this.fb.group({
      typeClient: '',
      typeContact: '',
      civilite: '',
      nom: '',
      prenom: '',
      societeEnCreation: '',
      societe: '',
      tel: '',
      email: '',
      emailSupp: '',
      activite: '',
      origine: '',
      topAcquereur: '',
      demandeRdv: '',
      newsLettre: '',
      consentementRGPD: '',
      alertEmail: '',

    });
  }

  onSubmit() {
    this.activeModal.close(this.clientForm);
  }

}
