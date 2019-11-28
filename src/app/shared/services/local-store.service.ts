import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {

  private ls = window.localStorage;
  constructor() { }

  public setItem(key, value) {
    value = JSON.stringify(value);
    console.log('Token local:' + value);
    this.ls.setItem(key, value);
    return true;
  }

  public setToken(value) {
    this.ls.setItem('access_token', value);
    return true;
  }

  public getItem(key) {
    const value = this.ls.getItem(key);
    try {
      return JSON.parse(value);
    } catch (e) {
      // console.log(e)
      return null;
    }
  }
  public clear() {
    this.ls.clear();
  }
}
