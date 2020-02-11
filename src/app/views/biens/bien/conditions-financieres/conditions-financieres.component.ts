import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-conditions-financieres',
  templateUrl: './conditions-financieres.component.html',
  styleUrls: ['./conditions-financieres.component.scss']
})
export class ConditionsFinancieresComponent implements OnInit {

  @Input() public conditionsFinancieresForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
