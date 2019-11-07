import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Consultant } from 'src/app/shared/models/consultant';
import { ConsultantService } from 'src/app/shared/services/consultant.service';
import { AcquereurService } from '../../acquereur.service';

@Component({
  selector: 'app-consultant-responsable',
  templateUrl: './consultant-responsable.component.html',
  styleUrls: ['./consultant-responsable.component.scss']
})
export class ConsultantResponsableComponent implements OnInit, AfterViewInit {

  @Input() public consultantResponsableForm: FormGroup;
  constructor(
    private acquereurService: AcquereurService,
    public consultantService: ConsultantService,
  ) { }

  ngOnInit() {
    console.log('Acquereur : Consultant init');
    this.consultantService.fetchConsultants();
  }

  ngAfterViewInit(): void {
    console.log(this.consultantResponsableForm);
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

  associerConsultant() {
    const consultant: Consultant = this.consultantResponsableForm.get('consultantAssocie').value;
    if (consultant) {
      this.consultantsAssociesArray.push(this.acquereurService.createConsultant(consultant));
      this.consultantService.remove(consultant);
      this.consultantResponsableForm.get('consultantAssocie').setValue(null);
    }
  }


}
