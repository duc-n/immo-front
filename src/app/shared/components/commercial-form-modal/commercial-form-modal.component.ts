import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Consultant } from '../../models/consultant';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-commercial-form-modal',
  templateUrl: './commercial-form-modal.component.html',
  styleUrls: ['./commercial-form-modal.component.scss']
})
export class CommercialFormModalComponent implements OnInit {

  @Input() id: string; // this value will be used in case of editing a client
  @Input() consultants$: BehaviorSubject<Consultant[]>;

  commercialForm: FormGroup;

  constructor(
    private readonly logger: NGXLogger,
    public activeModal: NgbActiveModal,
    private readonly fb: FormBuilder
  ) {
    this.createClientForm();
  }

  ngOnInit() {
  }

  createClientForm() {
    this.commercialForm = this.fb.group({
      consultant: [, [Validators.required]],
      commission: []
    });
  }

  onSubmit() {
    this.logger.debug('Consultant associé : ' + this.commercialForm.value);
    this.activeModal.close(this.commercialForm.value);
  }

}
