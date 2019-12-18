import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { BienService } from '../bien.service';
import { Observable } from 'rxjs/internal/Observable';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
=======
import { NGXLogger } from 'ngx-logger';
>>>>>>> a1e372f03ed7932fae0886d2e13320f0359d87b5

@Component({
  selector: 'app-bien',
  templateUrl: './bien.component.html',
  styleUrls: ['./bien.component.scss'],
  animations: [SharedAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BienComponent implements OnInit {

  bienForm$: Observable<FormGroup>;
  id: string;
  constructor(
    private readonly logger: NGXLogger,
    private readonly route: ActivatedRoute,
    private readonly fb: FormBuilder,
    private readonly bienService: BienService,
    private route: ActivatedRoute
  ) {
  }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.bienForm$ = this.bienService.getBienForm(this.id);
  }

  enregistrer() {

    this.bienForm$.subscribe(bienForm => {
      this.logger.debug('Bien form value ' + bienForm.value);
      this.bienService.saveBien(bienForm.value);
    });

  }
}
