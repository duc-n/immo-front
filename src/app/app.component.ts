import { Component } from '@angular/core';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootDash';

  constructor() {
    ReactiveFormConfig.set({
      'validationMessage': {
        'required': 'This field is required.',
        'minLenght': 'Enter minimum length of {{0}} characters.',
        'compare': 'The value should be matched with {{0}}.',
        'email': 'The adresse email is not matched',
        'alpha': 'you can only enter alphabets.'
      }
    });
  }
}
