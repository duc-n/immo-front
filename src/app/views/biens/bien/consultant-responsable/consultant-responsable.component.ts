import { Component, OnInit, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { BienService } from '../../bien.service';
import { ConsultantService } from 'src/app/shared/services/consultant.service';
import { Consultant } from 'src/app/shared/models/consultant';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommercialFormModalComponent } from 'src/app/shared/components/commercial-form-modal/commercial-form-modal.component';
import { NGXLogger } from 'ngx-logger';
import { ConsultantAssocie } from 'src/app/shared/models/consultantAssocie';

@Component({
  selector: 'app-consultant-responsable',
  templateUrl: './consultant-responsable.component.html',
  styleUrls: ['./consultant-responsable.component.scss']
})
export class ConsultantResponsableComponent implements OnInit, AfterViewInit {
  @Input() public consultantResponsableForm: FormGroup;
  constructor(
    private logger: NGXLogger,
    private bienService: BienService,
    public consultantService: ConsultantService,
    private modalService: NgbModal,
    private cdRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.logger.debug('Consultant init');
    this.consultantService.fetchConsultants();
  }

  ngAfterViewInit(): void {
    this.logger.debug('consultantResponsableForm form:' + this.consultantResponsableForm);
  }
  get consultantsAssociesArray(): FormArray {
    return this.consultantResponsableForm.get('consultantsAssocies') as FormArray;
  }

  getConsultantFormGroup(index): FormGroup {
    return this.consultantsAssociesArray.controls[index] as FormGroup;
  }

  detacherConsultant(index) {
    const consultantForm = this.getConsultantFormGroup(index);
    this.consultantsAssociesArray.removeAt(index);
    this.consultantService.add(consultantForm.value);
  }

  associerConsultant(consultantAssocie: ConsultantAssocie) {
    if (consultantAssocie) {
      this.consultantsAssociesArray.push(this.bienService.createConsultant(consultantAssocie));
      this.consultantService.remove(consultantAssocie);
      // when adding the consultant object manually, just tell Angular the change by calling this.cdRef.detectChanges();
      this.cdRef.detectChanges();
    }
  }

  openCommercialModal() {
    const modalRef = this.modalService.open(CommercialFormModalComponent);

    // Pass the consultants$ observable into the modal
    modalRef.componentInstance.consultants$ = this.consultantService.consultants$;

    modalRef.result.then((result) => {
      const consultantAssocie: ConsultantAssocie = result;
      this.associerConsultant(consultantAssocie);

    }).catch((error) => {
      this.logger.error('Error' + error);
    });
  }

}
