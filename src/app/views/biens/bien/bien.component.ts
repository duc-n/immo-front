import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { BienService } from '../bien.service';
import { Observable } from 'rxjs/internal/Observable';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { ActivatedRoute } from '@angular/router';

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
      console.log(bienForm.value);
      this.bienService.saveBien(bienForm.value);
    });

  }
}
