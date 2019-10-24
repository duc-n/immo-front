import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientFormModalComponent } from 'src/app/shared/components/client-form-modal/client-form-modal.component';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  @Input() public contactsForm: FormArray;
  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  openClientFormModal() {
    const modalRef = this.modalService.open(ClientFormModalComponent);

    modalRef.componentInstance.id = ''; // in case of editing a client

    modalRef.result.then((result) => {
      // Reput the data to contact form
      this.contactsForm.push(result);
      console.log(this.contactsForm);
    }).catch((error) => {
      console.log('Error' + error);
    });
  }

}
