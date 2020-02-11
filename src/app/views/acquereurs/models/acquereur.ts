import { Client } from 'src/app/shared/models/client';
import { Commercial } from 'src/app/shared/models/commercial';
import { InformationSupplementaires } from 'src/app/shared/models/informations-supplementaires';
import { Consultant } from 'src/app/shared/models/consultant';

export interface Acquereur {
    acquereurDetail?: Client;
    consultant?: Consultant;
    consultantsAssocies?: Consultant[];
    commerciaux?: Commercial[];
    informationsSupplementaires: InformationSupplementaires;
}
