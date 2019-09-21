import { Activites } from './activites';
import { Emplacements } from './emplacements';

export class Titulaire {
    nomTitulaire: string;
    prenomTitulaire: string;
    adresse: string;
    ville: string;
    codePostal: string;
    quatier: string;
    metro: string;
    rer: string;
    bus: string;
    parking: string;
    typeBien: string;
    activite: string;
    activites: Activites;
    nomMagasin: string;
    enseigneProximite: string;
    emplacements: Emplacements;

}
