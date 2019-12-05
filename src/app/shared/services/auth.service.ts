import { Injectable } from '@angular/core';
import { LocalStoreService } from './local-store.service';
import { Router } from '@angular/router';
import { of, BehaviorSubject, Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { DataLayerService } from './data-layer.service';
import { CONSTANTS } from '../constants/constant';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticated = false;

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private store: LocalStoreService, private router: Router,
    private dataLayerService: DataLayerService
  ) {
    this.checkAuth();
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  checkAuth() {
    this.authenticated = this.store.getItem(CONSTANTS.TOKEN);
  }

  signin(credentials) {
    return this.dataLayerService.login(credentials).pipe(tap(result => {
      this.authenticated = true;
      this.store.setToken(result.token);
      localStorage.setItem('currentUser', JSON.stringify(result.user));
      this.currentUserSubject.next(result.user);
    }));
  }
  signout() {
    this.authenticated = false;
    this.store.clear();
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/sessions/signin']);
  }
}
