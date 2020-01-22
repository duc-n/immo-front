import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteStateService {
  private previousUrl: string = undefined;
  private currentUrl: string = undefined;
  private idBienParamState = new BehaviorSubject<string>(null);
  idBienParam: Observable<string>;
  idBienValue: string;

  constructor(private router: Router) {
    this.idBienParam = this.idBienParamState.asObservable();

    this.currentUrl = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      }
    });
  }

  updateIdBienParamState(newIdBien: string) {
    this.idBienValue = newIdBien;
    this.idBienParamState.next(newIdBien);
  }

  public getPreviousUrl() {
    return this.previousUrl;
  }

  public getCurrentUrl() {
    return this.currentUrl;
  }
}
