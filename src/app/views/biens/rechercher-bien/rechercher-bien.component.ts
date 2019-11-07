import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-rechercher-bien',
  templateUrl: './rechercher-bien.component.html',
  styleUrls: ['./rechercher-bien.component.scss']
})
export class RechercherBienComponent implements OnInit {
  loading: boolean;
  products$;
  viewMode: 'search' | 'result' = 'search';

  rechercherBienForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) { }

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
      pointRoute: [],
      pointNoir: [],
      avecPanneau: [],
      sansPasserelles: [],
      licenceIV: [],
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
      zac: [],
    });
  }

  rechercherBien() {
    this.products$ = this.productService.getProducts();
    this.viewMode = 'result';
  }

}
