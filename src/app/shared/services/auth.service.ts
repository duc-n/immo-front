import { Injectable } from '@angular/core';
import { LocalStoreService } from './local-store.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { DataLayerService } from './data-layer.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Only for demo purpose
  authenticated = true;

  constructor(private store: LocalStoreService, private router: Router,
    private dataLayerService: DataLayerService
  ) {
    this.checkAuth();
  }

  checkAuth() {
    // this.authenticated = this.store.getItem("demo_login_status");
  }

  getuser() {
    return of({});
  }

  signin(credentials) {
    return this.dataLayerService.login(credentials).pipe(tap(result => {
      this.authenticated = true;
      this.store.setToken(result.token);
    }));
  }
  signout() {
    this.authenticated = false;
    this.store.clear();
    this.router.navigateByUrl('/sessions/signin');
  }
}
