import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Utils } from '../utils';
import { Consultant } from '../models/consultant';
import { Activite } from '../models/activite';
import { Client } from '../models/client';
import { environment } from 'src/environments/environment';
import { BienCritere } from 'src/app/views/biens/models/search/bien-critere';
import { REST_URLS } from '../constants/rest-urls';
import { Observable } from 'rxjs/internal/Observable';
import { Bien } from 'src/app/views/biens/models/bien';

@Injectable({
    providedIn: 'root'
})
export class DataLayerService {
    private apiUrl: string;
    constructor(
        private http: HttpClient
    ) { this.apiUrl = environment.api_url; }


    getInvoices() {
        return this.http.get<any[]>('/api/invoices');
    }
    getInvoice(id) {
        return this.http.get<any[]>('/api/invoices/' + id);
    }
    saveInvoice(invoice) {
        if (invoice.id) {
            return this.http.put<any[]>('/api/invoices/' + invoice.id, invoice);
        } else {
            invoice.id = Utils.genId();
            return this.http.post<any[]>('/api/invoices/', invoice);
        }
    }
    deleteInvoice(id) {
        return this.http.delete<any[]>('/api/invoices/' + id);
    }
    getMails() {
        return this.http.get<any[]>('/api/mails');
    }
    getCountries() {
        return this.http.get<any[]>('/api/countries');
    }
    getProducts() {
        return this.http.get<any[]>('api/products');
    }

    login(credentials: any): Observable<any> {
        return this.http.post<any>(this.apiUrl + REST_URLS.LOGIN, credentials);
    }

    signup(user: any): Observable<any> {
        return this.http.post<any>(this.apiUrl + REST_URLS.SIGNUP, user);
    }

    getBien(id: string): Observable<Bien> {
        return this.http.get<Bien>(this.apiUrl + REST_URLS.BIEN_GET.replace(':id', id));
    }

    create<T>(url): Observable<T> {
        return this.http.get<any>(this.apiUrl + url);
    }

    getBiensEtatCreation(): Observable<any> {
        return this.http.get<any>(this.apiUrl + REST_URLS.BIEN_GET_BIEN_ETAT_CREATION);
    }

    rechercherBien(bienCritere: BienCritere): Observable<any> {
        return this.http.post<any>(this.apiUrl + REST_URLS.BIEN_RECHERCHE, bienCritere);
    }

    update<T>(url: string, itemToUpdate: any): Observable<T> {
        return this.http.put<T>(this.apiUrl + url, itemToUpdate);
    }

    getConsultants() {
        return this.http.get<Consultant[]>(this.apiUrl + REST_URLS.USERS);
    }
    getActivites() {
        return this.http.get<Activite[]>('api/activites');
    }
    clientLookup(nom) {
        const params = new HttpParams().set('nom', nom);
        return this.http.get<Client[]>(this.apiUrl + REST_URLS.CLIENT_CLIENT_LOOKUP, { params: params });
    }
}
