import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Utils } from '../utils';
import { Consultant } from '../models/consultant';
import { Activite } from '../models/activite';
import { Client } from '../models/client';

@Injectable({
    providedIn: 'root'
})
export class DataLayerService {

    constructor(
        private http: HttpClient
    ) { }


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
    getConsultants() {
        return this.http.get<Consultant[]>('api/consultants');
    }
    getActivites() {
        return this.http.get<Activite[]>('api/activites');
    }
    clientLookup(nom) {
        const params = new HttpParams().set('nom', nom);
        return this.http.get<Client[]>('http://localhost:8080/client/clientLookup', { params: params });
    }
}
