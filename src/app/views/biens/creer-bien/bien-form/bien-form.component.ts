import { Component, OnInit, ViewChild, AfterViewInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Bien } from '../../models/bien';
import { Observable } from 'rxjs/internal/Observable';
import { DetailBienComponent } from './detail-bien/detail-bien.component';
import { map } from 'rxjs/internal/operators/map';
import { combineLatest } from 'rxjs/internal/observable/combineLatest';
import { ConsultantResponsableComponent } from './consultant-responsable/consultant-responsable.component';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bien-form',
  templateUrl: './bien-form.component.html',
  styleUrls: ['./bien-form.component.scss'],
  animations: [SharedAnimations]
})
export class BienFormComponent implements OnInit, AfterViewInit, AfterContentInit {

  formIsValid$: Observable<boolean>;

  //@ViewChild(DetailBienComponent, { static: false }) detailBienComponent: DetailBienComponent;
  @ViewChild(ConsultantResponsableComponent, { static: false }) consultantResponsableComponent: ConsultantResponsableComponent;
  @ContentChildren(DetailBienComponent) tabs: QueryList<DetailBienComponent>;

  ngAfterContentInit() {
    console.log('Content called');
    this.tabs.forEach(tabInstance => console.log(tabInstance));
  }

  constructor() { }

  ngAfterViewInit(): void {

    const statusIsTrue = map(status => status === 'VALID');

    //console.log('Panel ' + this.accordion.panels);
    // const detailBienFormStatus = this.detailBienComponent.detailBienForm.statusChanges.pipe(
    //   statusIsTrue
    // );

    const consultantResponsableFormStatus = this.consultantResponsableComponent.consultantResponsableForm.statusChanges.pipe(
      statusIsTrue
    );

    // this.formIsValid$ = combineLatest([consultantResponsableFormStatus, detailBienFormStatus]).pipe(
    //   map((statuses: boolean[]) => statuses.every(status => status === true))
    // );
  }

  ngOnInit() {

  }

  // onSubmit() {
  //   console.log(this.bien.value, this.bien.valid);
  // }

}
