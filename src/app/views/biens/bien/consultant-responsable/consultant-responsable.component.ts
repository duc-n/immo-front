import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-consultant-responsable',
  templateUrl: './consultant-responsable.component.html',
  styleUrls: ['./consultant-responsable.component.scss']
})
export class ConsultantResponsableComponent implements OnInit {
  @Input() public consultantResponsableForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
