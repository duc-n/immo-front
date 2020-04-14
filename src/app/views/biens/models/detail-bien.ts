import { AdresseBien } from './adresse-bien';
import { Activites } from './activites';

export interface DetailBien {
    adresseBien: AdresseBien;
    typeBien: string;
    activite: string;
    activites: Activites;
    nomMagasin: string;
    enseigneProximite: string;
}
