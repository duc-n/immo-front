import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-surface',
  templateUrl: './surface.component.html',
  styleUrls: ['./surface.component.scss']
})
export class SurfaceComponent implements OnInit {

  @Input() public surfaceForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
