import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-consultant-responsable',
  templateUrl: './consultant-responsable.component.html',
  styleUrls: ['./consultant-responsable.component.scss']
})
export class ConsultantResponsableComponent implements OnInit {

  public consultantResponsableForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.consultantResponsableForm = this.initConsultantResponsableFormModel();
  }
  private initConsultantResponsableFormModel() {
    return this.fb.group({


    });

  }

}
