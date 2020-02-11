import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Activite } from '../models/activite';
import { DataLayerService } from './data-layer.service';
import { isUndefined } from 'util';


@Injectable({
  providedIn: 'root'
})
export class ActiviteService {

  /**
  * Observable who should always be the replica of last consultants state.
  */
  private _activites$: BehaviorSubject<Activite[]>;
  /**
   * Array of consultant, use for each action done on activite.
   */
  private activites: Activite[];
  constructor(private readonly dataLayerService: DataLayerService) {
    this._activites$ = new BehaviorSubject([]);
    this.activites = [];
  }

  fetchActivites() {
    this.dataLayerService.getActivites().subscribe(activites => {
      this.activites = activites;
      this._activites$.next(activites);
    });
  }

  get activites$(): Observable<Activite[]> {
    // return only observable, don't put BehaviorSubject on public
    return this._activites$.asObservable();
  }

  remove(activite: Activite) {
    this.activites = this.activites.filter(item => item.id !== activite.id);
    this._activites$.next(this.activites);
  }

  add(activite: Activite) {
    const index = this.activites.findIndex(item => item.id === activite.id);
    if (isUndefined(this.activites[index])) {
      this.activites.push(activite);
    }

    // Notify rest of application.
    this._activites$.next(this.activites);
  }
}
