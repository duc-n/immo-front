import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-commnunication',
  templateUrl: './commnunication.component.html',
  styleUrls: ['./commnunication.component.scss']
})
export class CommnunicationComponent implements OnInit {

  @Input() public communicationForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
