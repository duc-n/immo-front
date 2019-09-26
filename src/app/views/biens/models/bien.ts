import { Mandat } from './mandat';
import { Bail } from './bail';
import { ConditionsFinancieres } from './conditions-financieres';
import { Viste } from './visite';
import { Surface } from './surface';
import { Descriptif } from './descriptif';
import { Photos } from './photos';
import { Videos } from './videos';
import { DetailBien } from './detail-bien';

export interface Bien {
    nomTitulaire: string;
    detailBien: DetailBien;
    mandat: Mandat;
    bail: Bail;
    conditionsFinancieres: ConditionsFinancieres;
    viste: Viste;
    surface: Surface;
    descriptif: Descriptif;
    photos: Photos;
    videos: Videos;
}
