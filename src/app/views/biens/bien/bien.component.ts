import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { BienService } from '../bien.service';
import { Observable } from 'rxjs/internal/Observable';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { ActivatedRoute } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { Subscriber, Subject } from 'rxjs';
import { RouteStateService } from 'src/app/shared/services/route-state.service';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-bien',
  templateUrl: './bien.component.html',
  styleUrls: ['./bien.component.scss'],
  animations: [SharedAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BienComponent implements OnInit, OnDestroy {

  private destroySubscriber = new Subject<void>();

  bienForm$: Observable<FormGroup>;
  id: string;
  constructor(
    private readonly logger: NGXLogger,
    private readonly route: ActivatedRoute,
    private readonly bienService: BienService,
    private readonly routeStateService: RouteStateService
  ) {
  }
  ngOnInit() {
    // Store the id bien in a service
    this.route.paramMap
      .pipe(
        map(paramMap => paramMap.get('id')),
        takeUntil(this.destroySubscriber)
      )
      .subscribe(idBienPathParam => this.routeStateService.updateIdBienParamState(idBienPathParam));

    this.id = this.route.snapshot.params['id'];
    this.bienForm$ = this.id ? this.bienService.getBienForm(this.id) : this.bienService.createBienForm();
  }


  enregistrer(bienForm: FormGroup) {
    this.bienService.saveBien(bienForm.value);
  }

  ngOnDestroy(): void {
    this.destroySubscriber.next();
    this.destroySubscriber.complete();
    this.routeStateService.updateIdBienParamState(null);
  }
}
