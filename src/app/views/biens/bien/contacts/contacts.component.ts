import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientFormModalComponent } from 'src/app/shared/components/client-form-modal/client-form-modal.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

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

      console.log(result);
    }).catch((error) => {
      console.log('Error' + error);
    });
  }

}
