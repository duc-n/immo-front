import { Emplacements } from './emplacements';

export interface AdresseBien {
    adresse: string;
    ville: string;
    codePostal: string;
    quatier: string;
    metro: string;
    rer: string;
    bus: string;
    parking: string;
    emplacements: Emplacements;
    origine: string;
}
