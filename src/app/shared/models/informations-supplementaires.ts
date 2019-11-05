import { Activite } from './activite';
import { Societe } from './societe';

export interface InformationSupplementaires {
    numMobile: string;
    numFixe: string;
    numFax: string;
    numAutre: string;

    activites: Activite[];
    societes: Societe[];
    notes: Text;

}
