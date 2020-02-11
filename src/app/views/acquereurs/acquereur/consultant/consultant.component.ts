import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommercialFormModalComponent } from 'src/app/shared/components/commercial-form-modal/commercial-form-modal.component';

@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.scss']
})
export class ConsultantComponent implements OnInit {

  @Input() public commerciauxForm: FormGroup;
  @Input() public commerciauxArray: FormArray;

  console = console;
  thmcommercialForm: FormGroup;


  constructor(private modalService: NgbModal,
    private fb: FormBuilder) {
  }


  ngOnInit() {
    this.commerciauxArray = <FormArray>this.commerciauxForm.controls['commerciaux'];
  }

  addItem() {
    const control = <FormArray>this.commerciauxForm.controls['commerciaux'];
    control.push(this.createItem());
  }


  removeItem(i) {
    const control = <FormArray>this.commerciauxForm.controls['commerciaux'];
    control.removeAt(i);
  }


  createItem(item: any = {}) {
    return this.fb.group({
      nom: 'TEST',
      prenom: 'TESTSQSDFSD',
      commission: this.fb.group({
        'pourcentage': 70
      })
    });
  }


  openCommercialFormModal() {
    //const modalRef = this.modalService.open(CommercialFormModalComponent);
    const modalRef = this.modalService.open(CommercialFormModalComponent);

    modalRef.componentInstance.id = ''; // in case of editing a client
    modalRef.componentInstance.size = 'TESTER'


    modalRef.result.then((result) => {
      // Reput the data to contact form
      // this.commerciauxArray.push(result);
      const control = <FormArray>this.commerciauxForm.controls['commerciaux'];
      console.log(result);
      control.push(result);
    }).catch((error) => {
      console.log('Error' + error);
    });
  }



}
