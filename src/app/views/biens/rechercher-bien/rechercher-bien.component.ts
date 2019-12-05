import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BienService } from '../bien.service';
import { Page } from 'src/app/shared/models/page';
import { Bien } from '../models/bien';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { BienResume } from 'src/app/shared/models/bien-resume';

@Component({
  selector: 'app-rechercher-bien',
  templateUrl: './rechercher-bien.component.html',
  styleUrls: ['./rechercher-bien.component.scss']
})
export class RechercherBienComponent implements OnInit {
  loading: boolean;
  viewMode: 'search' | 'result' = 'search';

  rechercherBienForm: FormGroup;
  critere: any;
  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.buildRechercherBienForm();
  }

  buildRechercherBienForm() {
    this.rechercherBienForm = this.fb.group({
      typeBien: [],
      consultant: [],
      cessionBail: [],
      locationPure: [],
      locationDroitEntree: [],
      mursLibres: [],
      mursOccupes: [],
      adresse: [],
      departement: [],
      codePostal: [],
      loyerMin: [],
      loyerMax: [],
      prixMin: [],
      prixMax: [],
      valeurLocativeMin: [],
      valeurLocativeMax: [],
      surfaceTotaleMin: [],
      surfaceTotaleMax: [],
      surfaceRDCMin: [],
      surfaceRDCMax: [],
      lineaireVitrineMin: [],
      angle: [],
      pointRouge: [],
      pointNoir: [],
      avecPanneau: [],
      sansPasserelles: [],
      licenceIV: [],
      liquidationJudiciaire: [],
      popupStore: [],
      restaurentConduitCheminee: [],
      restaurentSansNuisance: [],
      terrasse: [],
      brouillon: [],
      conclu: [],
      actif: [],
      offreEnCours: [],
      archive: [],
      activite: [],
      aDefinir: [],
      numero1: [],
      numero1Alimentaire: [],
      numero1PretAPorter: [],
      rueCommercante: [],
      fluxPieton: [],
      axeVoiture: [],
      ruePietonne: [],
      zoneTouristique: [],
      zoneBureau: [],
      zoneResidentielle: [],
      centreCommercial: [],
      zac: []
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.rechercherBienForm.controls; }

  rechercherBien() {
    this.viewMode = 'result';
    this.critere = this.rechercherBienForm.value;
  }

}
