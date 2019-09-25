import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';

@Component({
  selector: 'app-bien-form',
  templateUrl: './bien-form.component.html',
  styleUrls: ['./bien-form.component.scss'],
  animations: [SharedAnimations]
})
export class BienFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  // onSubmit() {
  //   console.log(this.bien.value, this.bien.valid);
  // }

}
