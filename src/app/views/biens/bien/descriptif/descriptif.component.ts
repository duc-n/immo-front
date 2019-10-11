import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-descriptif',
  templateUrl: './descriptif.component.html',
  styleUrls: ['./descriptif.component.scss']
})
export class DescriptifComponent implements OnInit {

  @Input() public descriptifForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
