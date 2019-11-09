export interface BienCritere {
    typeBien: string;
    consultant: string;
    cessionBail: boolean;
    locationPure: boolean;
    locationDroitEntree: boolean;
    mursLibres: boolean;
    mursOccupes: boolean;
    adresse: string;
    departement: string;
    codePostal: string;
    loyerMin: number;
    loyerMax: number;
    prixMin: number;
    prixMax: number;
    valeurLocativeMin: number;
    valeurLocativeMax: number;
    surfaceTotaleMin: number;
    surfaceTotaleMax: number;
    surfaceRDCMin: number;
    surfaceRDCMax: number;
    lineaireVitrineMin: number;
    angle: boolean;

    pointRouge: boolean;
    pointNoir: boolean;
    avecPanneau: boolean;
    sansPasserelles: boolean;
    licenceIV: boolean;
    liquidationJudiciaire: boolean;
    popupStore: boolean;
    restaurentConduitCheminee: boolean;
    restaurentSansNuisance: boolean;
    terrasse: boolean;
    brouillon: boolean;
    conclu: boolean;
    actif: boolean;
    offreEnCours: boolean;
    archive: boolean;

    activite: string;

    // Emplacement
    aDefinir: boolean;
    numero1: boolean;
    numero1Alimentaire: boolean;
    numero1PretAPorter: boolean;
    rueCommercante: boolean;
    fluxPieton: boolean;
    axeVoiture: boolean;
    ruePietonne: boolean;
    zoneTouristique: boolean;
    zoneBureau: boolean;
    zoneResidentielle: boolean;
    centreCommercial: boolean;
    zac: boolean;
}
