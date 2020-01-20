import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGaurd implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  canActivate() {
    if (this.auth.isAdmin()) {
      return true;
    } else {
      window.alert('Vous n\'avez pas de droit nécessaire pour visiter la page');
      return false;
    }
  }
}
