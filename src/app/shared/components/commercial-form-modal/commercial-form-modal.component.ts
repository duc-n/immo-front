import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-commercial-form-modal',
  templateUrl: './commercial-form-modal.component.html',
  styleUrls: ['./commercial-form-modal.component.scss']
})
export class CommercialFormModalComponent implements OnInit {


  @Input() id: string; // this value will be used in case of editing a client
  @Input() size: string;
  commercialForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) {
    this.createClientForm();
  }

  ngOnInit() {
  }

  createClientForm() {
    this.commercialForm = this.fb.group({
      nom: '',
      prenom: '',
      commission: this.fb.group({
        'pourcentage': ''
      })
    });
  }


  onSubmit() {
    this.activeModal.close(this.commercialForm);
  }

}
