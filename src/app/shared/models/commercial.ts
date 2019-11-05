import { Commission } from './commission';

export interface Commercial {
    nom: string;
    prenom: string;
    commission?: Commission;
}
