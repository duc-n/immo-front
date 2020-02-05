import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { Observable, fromEvent, of } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { ToastrService } from 'ngx-toastr';
import { RxFormBuilder, RxFormGroup } from '@rxweb/reactive-form-validators';
import { UserRegister } from '../models/user-register';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [SharedAnimations]
})
export class SignupComponent implements OnInit, AfterViewInit {
  signupForm: FormGroup;
  @ViewChild('inscriptionBtn', { static: false }) inscriptionBtn: ElementRef;
  constructor(private fb: FormBuilder,
    private dataLayerService: DataLayerService,
    private router: Router,
    private logger: NGXLogger,
    private formBuilder: RxFormBuilder,
    private toastr: ToastrService) { }

  ngOnInit() {
    const userRegister = new UserRegister();
    this.signupForm = this.formBuilder.formGroup(userRegister) as RxFormGroup;

    // this.signupForm = this.fb.group({
    //   nom: [, Validators.required],
    //   prenom: [, Validators.required],
    //   telephone: [, Validators.required],
    //   email: [, Validators.required],
    //   admin: [],
    //   password: [, Validators.required],
    //   repassword: [, Validators.required],
    // });

  }

  ngAfterViewInit() {
    fromEvent(this.inscriptionBtn.nativeElement, 'click')
      .pipe(exhaustMap(click => this.signup()))
      .subscribe(
        res => {
          console.log(res);
          this.toastr.success('Le compte d\'utilisateur a été créé', 'Terminer!', { timeOut: 3000 });
          this.router.navigate(['/dashboard/v1']);
        },
        error => {

        }

      );

  }

  signup() {
    return this.dataLayerService.signup(this.signupForm.value);
  }

}
