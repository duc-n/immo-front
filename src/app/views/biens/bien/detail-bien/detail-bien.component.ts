import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail-bien',
  templateUrl: './detail-bien.component.html',
  styleUrls: ['./detail-bien.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailBienComponent implements OnInit {

  @Input() public detailBienForm: FormGroup;

  constructor(private readonly fb: FormBuilder) {
  }

  ngOnInit() {
    // console.log(this.detailBienForm);
  }

}
