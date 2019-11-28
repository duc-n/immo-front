import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BienService } from '../bien.service';
import { Page } from 'src/app/shared/models/page';
import { Bien } from '../models/bien';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';

@Component({
  selector: 'app-rechercher-bien',
  templateUrl: './rechercher-bien.component.html',
  styleUrls: ['./rechercher-bien.component.scss']
})
export class RechercherBienComponent implements OnInit {
  loading: boolean;
  viewMode: 'search' | 'result' = 'search';

  page = new Page();
  rows = new Array<Bien>();
  cache: any = {};
  rechercherBienForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private bienService: BienService,
    private dataLayerService: DataLayerService
  ) {
    this.page.pageNumber = 0;
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

  rechercherBien() {
    this.page = new Page();
    this.rows = new Array<Bien>();
    this.viewMode = 'result';
  }

  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  setPage(pageInfo) {
    console.log(pageInfo);
    this.page.pageNumber = pageInfo.offset;
    const rechercherBienCritere = this.rechercherBienForm.value;
    rechercherBienCritere.page = this.page;

    // cache results
    // if(this.cache[this.page.pageNumber]) return;
    let i = 0;
    this.dataLayerService.rechercherBien(rechercherBienCritere).subscribe(pagedData => {
      i = i + 1;
      console.log('Subcribe counted ' + i);
      this.page.size = pagedData.size;
      this.page.totalElements = pagedData.totalElements;
      this.page.totalPages = pagedData.totalPages;
      this.page.pageNumber = pagedData.number;

      // calc start
      const start = this.page.pageNumber * this.page.size;

      // copy rows
      const rows = [...this.rows];

      // insert rows into new position
      rows.splice(start, 0, ...pagedData.content);

      // set rows to our new rows
      this.rows = rows;

      // add flag for results
      this.cache[this.page.pageNumber] = true;
    });
  }

  detail(id) {
    console.log(id);
  }

}
