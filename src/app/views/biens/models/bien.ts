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
import { Client } from 'src/app/shared/models/client';
import { Consultant } from 'src/app/shared/models/consultant';
import { ConsultantDB } from 'src/app/shared/inmemory-db/consultants';

export interface Bien {
    id?: string;
    consultant?: Consultant;
    consultantsAssocies?: Consultant[];
    detailBien?: DetailBien;
    mandat?: Mandat;
    bail?: Bail;
    conditionsFinancieres?: ConditionsFinancieres;
    visite?: Visite;
    surface?: Surface;
    descriptif?: Descriptif;
    photos?: Photos;
    videos?: Videos;
    communication?: Communication;
    contacts?: Client[];
}
