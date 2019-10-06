import { Mandat } from './mandat';
import { Bail } from './bail';
import { ConditionsFinancieres } from './conditions-financieres';
import { Visite } from './visite';
import { Surface } from './surface';
import { Descriptif } from './descriptif';
import { Photos } from './photos';
import { Videos } from './videos';
import { DetailBien } from './detail-bien';
import { Communication } from './communication';

export interface Bien {
    nomTitulaire: string;
    detailBien: DetailBien;
    mandat: Mandat;
    bail: Bail;
    conditionsFinancieres: ConditionsFinancieres;
    visite: Visite;
    surface: Surface;
    descriptif: Descriptif;
    photos: Photos;
    videos: Videos;
    communication: Communication;
}
