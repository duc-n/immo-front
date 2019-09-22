import { Injectable } from '@angular/core';
import { Bien } from './models/bien';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import 'rxjs/add/operator/pluck';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
export interface State {
  bien: Bien;
}

const state: State = {
  bien: null,
};

@Injectable({
  providedIn: 'root'
})
export class BienService {
  private subject = new BehaviorSubject<State>(state);
  store = this.subject.asObservable();

  select<T>(name: string): Observable<T> {
    return this.store.pipe(pluck('name'));
  }

  constructor() { }
}
