import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-detail-acquereur',
  templateUrl: './detail-acquereur.component.html',
  styleUrls: ['./detail-acquereur.component.scss']
})
export class DetailAcquereurComponent implements OnInit {

  @Input() detailAcquereurForm: FormGroup;
  @Input() activitesArray: FormArray;
  @Input() activite: FormGroup;
  constructor() { }

  ngOnInit() {
    this.activitesArray = <FormArray>this.detailAcquereurForm.controls['activites'];
  }

}
