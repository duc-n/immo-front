import { Mandat } from './mandat';
import { Bail } from './bail';
import { ConditionsFinancieres } from './conditions-financieres';
import { Visite } from './visite';
import { Surface } from './surface';
import { Descriptif } from './descriptif';
import { Photo } from './photo';
import { Video } from './video';
import { DetailBien } from './detail-bien';
import { Communication } from './communication';
import { Client } from 'src/app/shared/models/client';
import { Consultant } from 'src/app/shared/models/consultant';
import { ConsultantDB } from 'src/app/shared/inmemory-db/consultants';
import { ConsultantAssocie } from 'src/app/shared/models/consultantAssocie';

export interface Bien {
    id?: string;
    consultant?: Consultant;
    consultantsAssocies?: ConsultantAssocie[];
    detailBien?: DetailBien;
    mandat?: Mandat;
    bail?: Bail;
    conditionsFinancieres?: ConditionsFinancieres;
    visite?: Visite;
    surface?: Surface;
    descriptif?: Descriptif;
    photos?: Photo[];
    videos?: Video[];
    communication?: Communication;
    contacts?: Client[];
}
