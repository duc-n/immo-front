import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { BienService } from '../bien.service';
import { Observable } from 'rxjs/internal/Observable';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-bien',
  templateUrl: './bien.component.html',
  styleUrls: ['./bien.component.scss'],
  animations: [SharedAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BienComponent implements OnInit {

  bienForm$: Observable<FormGroup> = this.bienService.getBienForm();

  constructor(private readonly fb: FormBuilder, private readonly bienService: BienService) {
  }
  ngOnInit() {

  }

  onSubmit(value) {
    console.log(value);
  }
}
