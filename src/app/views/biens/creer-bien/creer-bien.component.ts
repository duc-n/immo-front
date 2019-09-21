import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';

@Component({
  selector: 'app-creer-bien',
  templateUrl: './creer-bien.component.html',
  styleUrls: ['./creer-bien.component.scss'],
  animations: [SharedAnimations]
})
export class CreerBienComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
