import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  constructor(private fb: FormBuilder,
    private dataLayerService: DataLayerService,
    private router: Router,
    private logger: NGXLogger) { }

  ngOnInit() {

    this.profileForm = this.fb.group({
      nom: [, Validators.required],
      prenom: [, Validators.required],
      telephone: [, Validators.required],
      email: [, Validators.required],
      admin: [],
      password: [, Validators.required],
      repassword: [, Validators.required],
    });

  }

}
