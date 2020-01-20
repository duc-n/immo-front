import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotComponent } from './forgot/forgot.component';
import { AuthGaurd } from 'src/app/shared/services/auth.gaurd';
import { AdminGaurd } from 'src/app/shared/services/admin.gaurd';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [AuthGaurd, AdminGaurd],
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'forgot',
    component: ForgotComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule { }
