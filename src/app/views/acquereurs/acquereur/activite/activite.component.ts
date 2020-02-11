import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { AcquereurService } from '../../acquereur.service';
import { ActiviteService } from 'src/app/shared/services/activite.service';
import { Activite } from 'src/app/shared/models/activite';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.scss']
})
export class ActiviteComponent implements OnInit, AfterViewInit {

  @Input() public activitesleForm: FormGroup;
  // @Input() public activitiesArray: FormArray;


  constructor(
    private logger: NGXLogger,
    private acquereurService: AcquereurService,
    public activitetService: ActiviteService,
  ) { }

  ngOnInit() {
    console.log('Acquereur : Consultant init');
    // this.activitiesArray = <FormArray>this.activitesleForm.controls['activites'];
    this.activitetService.fetchActivites();
  }

  ngAfterViewInit(): void {
    console.log(this.activitesleForm);

    this.logger.debug('activitesForm ' + this.activitesleForm);
  }
  get activitesArray(): FormArray {
    return this.activitesleForm.get('activites') as FormArray;
  }

  getAcitivitesormGroup(index): FormGroup {
    return this.activitesArray.controls[index] as FormGroup;
  }

  detacherActivite(index) {
    const actviteForm = this.getAcitivitesormGroup(index);
    this.activitesArray.removeAt(index);
    this.activitetService.add(actviteForm.value);
  }

  associerActivite() {
    const activite: Activite = this.activitesleForm.get('activite').value;
    if (activite) {
      this.activitesArray.push(this.acquereurService.createActivite(activite));
      this.activitetService.remove(activite);
      this.activitesleForm.get('activite').setValue(null);
    }
  }

}
