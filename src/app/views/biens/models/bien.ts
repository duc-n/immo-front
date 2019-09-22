import { Activites } from './activites';
import { Emplacements } from './emplacements';
import { AdresseBien } from './adresse-bien';
import { Titulaire } from './titulaire';
import { Mandat } from './mandat';
import { Bail } from './bail';
import { ConditionsFinancieres } from './conditions-financieres';
import { Viste } from './visite';
import { Surface } from './surface';
import { Descriptif } from './descriptif';
import { Photos } from './photos';
import { Videos } from './videos';

export interface Bien {
    titulaire: Titulaire;
    adresseBien: AdresseBien;
    typeBien: string;
    activite: string;
    activites: Activites;
    nomMagasin: string;
    enseigneProximite: string;
    emplacements: Emplacements;
    origine: string;
    mandat: Mandat;
    bail: Bail;
    conditionsFinancieres: ConditionsFinancieres;
    viste: Viste;
    surface: Surface;
    descriptif: Descriptif;
    photos: Photos;
    videos: Videos;
}
