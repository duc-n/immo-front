import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Consultant } from '../models/consultant';
import { DataLayerService } from './data-layer.service';
import { Observable } from 'rxjs/internal/Observable';
import { isUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {
  /**
  * Observable who should always be the replica of last consultants state.
  */
  private _consultants$: BehaviorSubject<Consultant[]>;
  /**
   * Array of consultant, use for each action done on consultant.
   */
  private consultants: Consultant[];
  constructor(private readonly dataLayerService: DataLayerService) {
    this._consultants$ = new BehaviorSubject([]);
    this.consultants = [];
  }

  fetchConsultants() {
    this.dataLayerService.getConsultants().subscribe(consultants => {
      this.consultants = consultants;
      this._consultants$.next(consultants);
    });
  }

  get consultants$(): Observable<Consultant[]> {
    // return only observable, don't put BehaviorSubject on public
    return this._consultants$.asObservable();
  }

  remove(consultant: Consultant) {
    this.consultants = this.consultants.filter(item => item.id !== consultant.id);
    this._consultants$.next(this.consultants);
  }

  add(consultant: Consultant) {
    const index = this.consultants.findIndex(item => item.id === consultant.id);
    if (isUndefined(this.consultants[index])) {
      this.consultants.push(consultant);
    }

    // Notify rest of application.
    this._consultants$.next(this.consultants);
  }

}
