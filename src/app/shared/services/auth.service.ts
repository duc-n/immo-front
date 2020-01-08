import { Injectable } from '@angular/core';
import { LocalStoreService } from './local-store.service';
import { Router } from '@angular/router';
import { of, BehaviorSubject, Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { DataLayerService } from './data-layer.service';
import { CONSTANTS } from '../constants/constant';
import { User } from '../models/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

export const isMock = environment.mock_ws;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private store: LocalStoreService, private router: Router,
    private dataLayerService: DataLayerService, public jwtHelper: JwtHelperService
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // check if the user is stored in localStorage in order to redirect to homepage
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public isAuthenticated(): boolean {
    const token = this.store.getItem(CONSTANTS.TOKEN);
    // Check whether the token is expired and return
    // true or false
    const isTokenExpired = !this.jwtHelper.isTokenExpired(token);

    return token && (isMock || isTokenExpired);
  }

  signin(credentials) {
    return this.dataLayerService.login(credentials).pipe(tap(result => {
      this.store.setToken(result.token);
      localStorage.setItem('currentUser', JSON.stringify(result.user));
      this.currentUserSubject.next(result.user);
    }));
  }
  signout() {
    this.store.clear();
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/sessions/signin']);
  }
}
