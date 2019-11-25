import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { BienService } from '../bien.service';
import { Observable } from 'rxjs/internal/Observable';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';

@Component({
  selector: 'app-bien',
  templateUrl: './bien.component.html',
  styleUrls: ['./bien.component.scss'],
  animations: [SharedAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BienComponent implements OnInit {

  bienForm$: Observable<FormGroup> = this.bienService.getBienForm();

  constructor(
    private readonly fb: FormBuilder,
    private readonly bienService: BienService
  ) {
  }
  ngOnInit() {
    console.log('Init bien form');
  }

  enregistrer() {

    this.bienForm$.subscribe(bienForm => {
      console.log(bienForm.value);
      this.bienService.saveBien(bienForm.value);
    });

  }
}
