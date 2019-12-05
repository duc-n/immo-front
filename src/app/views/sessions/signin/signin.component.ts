import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router, RouteConfigLoadStart, ResolveStart, RouteConfigLoadEnd, ResolveEnd, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/internal/operators/first';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
    animations: [SharedAnimations]
})
export class SigninComponent implements OnInit {
    loading: boolean;
    loadingText: string;
    signinForm: FormGroup;
    returnUrl: string;
    error: string;
    constructor(
        private fb: FormBuilder,
        private auth: AuthService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        // redirect to home if already logged in
        if (this.auth.currentUserValue) {
            this.router.navigate(['/']);
        }

    }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
                this.loadingText = 'Loading Dashboard Module...';

                this.loading = true;
            }
            if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
                this.loading = false;
            }
        });

        this.signinForm = this.fb.group({
            username: ['admin@gmail.com', Validators.required],
            password: ['admin', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        if (this.auth.authenticated) {
            this.router.navigate([this.returnUrl]);
        }
    }

    signin() {
        this.loading = true;
        this.loadingText = 'Authentification en cours...';
        this.auth.signin(this.signinForm.value)
            .pipe(first())
            .subscribe(res => {
                this.router.navigate([this.returnUrl]);
                this.loading = false;
            },
                error => {
                    this.error = error;
                    this.loading = false;
                }
            );
    }

}
