import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { BienService } from '../bien.service';
import { Observable } from 'rxjs/internal/Observable';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-creer-bien',
  templateUrl: './creer-bien.component.html',
  styleUrls: ['./creer-bien.component.scss'],
  animations: [SharedAnimations]
})
export class CreerBienComponent implements OnInit {

  form$: Observable<FormGroup> = this.bienService.getBienForm();

  constructor(private readonly bienService: BienService) { }

  ngOnInit() {
  }

  onSubmit(value) {
    console.log(value);
  }
}
