export interface Client {
    typeClient: string;
    typeContact: string;
    civilite: string;
    nom: number;
    prenom: boolean;
    societeEnCreation: boolean;
    societe: string;
    tel: string;
    email: string;
    emailSup: string;
    activite: string;
    origine: string;
    topAcquereur: boolean;
    demandeRDV: boolean;
    newsLetter: boolean;
    consentementRGPD: boolean;
    recevoirAlertEmail: boolean;
}