import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteStateService {

  private idBienParamState = new BehaviorSubject<string>(null);
  idBienParam: Observable<string>;
  idBienValue: string;

  constructor() {
    this.idBienParam = this.idBienParamState.asObservable();
  }

  updateIdBienParamState(newIdBien: string) {
    this.idBienValue = newIdBien;
    this.idBienParamState.next(newIdBien);
  }
}
