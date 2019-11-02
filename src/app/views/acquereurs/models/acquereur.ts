import { Client } from 'src/app/shared/models/client';
import { Commercial } from 'src/app/shared/models/commercial';
import { InformationSupplementaires } from 'src/app/shared/models/informations-supplementaires';

export interface Acquereur {
    acquereurDetail?: Client;
    commerciaux?: Commercial[];
    informationsSupplementaires: InformationSupplementaires;
}
