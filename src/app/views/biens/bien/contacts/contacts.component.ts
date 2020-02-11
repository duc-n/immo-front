import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientFormModalComponent } from 'src/app/shared/components/client-form-modal/client-form-modal.component';
import { FormGroup, FormArray } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { Client } from 'src/app/shared/models/client';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  nomClient: string;

  @Input() public contactsForm: FormArray;
  constructor(
    private modalService: NgbModal,
    private dataLayerService: DataLayerService
  ) { }

  ngOnInit() {
  }

  openClientFormModal() {
    const modalRef = this.modalService.open(ClientFormModalComponent, { size: 'lg', centered: true });

    modalRef.componentInstance.id = ''; // in case of editing a client

    modalRef.result.then((result) => {
      // Reput the data to contact form
      this.contactsForm.push(result);
      console.log(this.contactsForm);
    }).catch((error) => {
      console.log('Error' + error);
    });
  }

  search = (text$: Observable<string>) => {
    return text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      // switchMap allows returning an observable rather than maps array
      switchMap((searchName) => this.dataLayerService.clientLookup(searchName))
      //catchError(new ErrorInfo().parseObservableResponseError)              
    );
  }

  /**
 * Used to format the result data from the lookup into the
 * display and list values. Maps `{name: "tran", id:"id" }` into a string
*/
  resultFormatClientListValue(value: any) {
    return value.nom + ' ' + value.prenom;
  }
  /**
    * Initially binds the string value and then after selecting
    * an item by checking either for string or key/value object.
  */
  inputFormatClientListValue(value: any) {
    if (value.id) {
      return value.id;
    }
    return value;
  }

  formatter = (client: Client) => client.nom + ' ' + client.prenom;

}
