import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bail',
  templateUrl: './bail.component.html',
  styleUrls: ['./bail.component.scss']
})
export class BailComponent implements OnInit {

  @Input() public bailForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
