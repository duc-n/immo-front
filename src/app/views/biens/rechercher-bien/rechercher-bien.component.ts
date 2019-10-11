import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rechercher-bien',
  templateUrl: './rechercher-bien.component.html',
  styleUrls: ['./rechercher-bien.component.scss']
})
export class RechercherBienComponent implements OnInit {
  loading: boolean;
  rechercherBienForm: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {

  }

  buildRechercherBienForm() {
    this.rechercherBienForm = this.fb.group({
      nomTitulare: []
    });
  }

  rechercherBien() {

  }

}
