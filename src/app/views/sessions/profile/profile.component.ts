import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { Router, NavigationEnd } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs';
import { UserProfile } from 'src/app/shared/models/user-profile';
import { tap } from 'rxjs/operators';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { RouteStateService } from 'src/app/shared/services/route-state.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [SharedAnimations]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  userProfile: Observable<UserProfile>;
  constructor(private fb: FormBuilder,
    private dataLayerService: DataLayerService,
    private routeStateService: RouteStateService,
    private router: Router,
    private logger: NGXLogger) { }

  ngOnInit() {

    this.profileForm = this.fb.group({
      nom: [, Validators.required],
      prenom: [, Validators.required],
      telephone: [, Validators.required],
      email: [, Validators.required],
      currentPassword: [],
      newPassword: [],
      reNewPassword: [],
    });

    this.userProfile = this.dataLayerService
      .getUserProfile()
      .pipe(tap(userProfile => {
        this.profileForm.patchValue(userProfile);
      }));
  }

  goToPreviousPage() {
    const previousPage = this.routeStateService.getPreviousUrl();
    this.logger.debug('Profile - Go to the previous page :', previousPage);
    this.router.navigate([previousPage]);
  }

  onSubmit() {
    this.dataLayerService.updateUserProfile(this.profileForm.value);
  }


}
