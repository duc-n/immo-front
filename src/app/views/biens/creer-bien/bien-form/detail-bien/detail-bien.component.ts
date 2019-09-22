import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail-bien',
  templateUrl: './detail-bien.component.html',
  styleUrls: ['./detail-bien.component.scss']
})
export class DetailBienComponent implements OnInit {

  public detailBienForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.detailBienForm = this.initDetailBienFormModel();
  }
  private initDetailBienFormModel() {
    return this.fb.group({

      adresseBien: this.fb.group({
        adresse: [, Validators.required],
        ville: [],
        codePostal: [],
        quatier: [],
        metro: [],
        rer: [],
        bus: [],
        parking: [],
      }),
      typeBien: [],
      activite: [],
      activites: this.fb.group({
        licence: [],
        liquidationJudiciaire: [],
        popupStore: [],
        restaurantConduitChemine: [],
        restaurantSansNuisance: [],
        terrasse: []
      })
    });

  }
}
