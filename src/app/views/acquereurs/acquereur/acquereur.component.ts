import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { AcquereurService } from '../acquereur.service';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';

@Component({
  selector: 'app-acquereur',
  templateUrl: './acquereur.component.html',
  styleUrls: ['./acquereur.component.scss'],
  animations: [SharedAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AcquereurComponent implements OnInit {

  acquereurForm$: Observable<FormGroup> = this.acquereurService.getAcquereurForm();

  constructor(private readonly fb: FormBuilder, private readonly acquereurService: AcquereurService) {
  }

  ngOnInit() {
  }

}
