export class BienDB {
    static bien = [
        {
            'id': 1,
            'consultant': {
                'id': '123',
                'nom': 'MINGOT',
                'prenom': 'Laurent',
                'tel': '0145678965',
                'email': 'laurent.mignot@gmail.com'
            },
            'consultantsAssocies': [{
                'consultant': {
                    'id': '01',
                    'nom': 'NGUYEN',
                    'prenom': 'Léo',
                    'tel': '0686090909',
                    'email': 'leo.nguyen@gmail.com'
                },
                'commission': 25
            },
            {
                'consultant': {
                    'id': '02',
                    'nom': 'GUIBER',
                    'prenom': 'Lucas',
                    'tel': '0645678934',
                    'email': 'lucas.guiber@gmail.com'
                },
                'commission': 25
            }
            ],
            'detailBien': {
                'typeBien': 'Commerce',
                'activite': 'activite',
                'activites': {
                    'licence': true,
                    'liquidationJudiciaire': true,
                    'popupStore': true,
                    'restaurantConduitChemine': true,
                    'restaurantSansNuisance': true,
                    'terrasse': true
                },
                'nomMagasin': 'Cele',
                'enseigneProximite': 'Ecole Sainte Jeanne d\'Arc',
                'adresseBien': {
                    'adresse': '25 Avenue d\'Ivry',
                    'ville': 'Paris',
                    'codePostal': '75013',
                    'quatier': 'Paris 13',
                    'metro': 'Ligne 7',
                    'rer': 'non',
                    'bus': '68,62',
                    'parking': 'centre commercial',
                    'origine': 'LE_BON_COIN',
                    'emplacements': {
                        'aDefinir': true,
                        'numero1': true,
                        'numero1Alimentaire': true,
                        'numero1PretPorter': true,
                        'rueCommercante': true,
                        'fluxPietons': true,
                        'axeVoiture': true,
                        'ruePietonne': true,
                        'zoneTouristique': true,
                        'zoneBureau': true,
                        'zoneResidentielle': true,
                        'centreCommercial': true,
                        'zac': true
                    }
                }
            },
            'bail': {
                'typeBail': 'bail',
                'bailNotarie': true,
                'chargeMensuel': 1000,
                'periodLoyer': '3',
                'depotGarantie': '3',
                'cautionSup': '3',
                'taxFonctiere': 300,
                'paiementTaxFonctiere': 'locataire',
                'paiement606': 'propriete'
            },
            'conditionsFinancieres': {
                'conditionsFinancieres': 'Autres conditions financières',
                'honorairesAgence': 33000,
                'paiementHonoraires': 'locataire',
                'tvaLoyer': true
            },
            'visite': {
                'cle': 'non',
                'commentaire': 'Local est idéalment pour les opticients',
                'digicode1': '1333',
                'digicode2': '345T434',
                'interphone': 'Boutique A',
                'etage': 'RDC'
            },
            'descriptif': {
                'localIdealPour': 'string',
                'longueurFacade': '3',
                'facadeAngle': true,
                'description': 'description description',
                'espaceExterieur': true,
                'hsp2m80': true,
                'pointEau': true,
                'wc': true,
                'disponible': true,
                'noteConfidentielle': 'noteConfidentielle'
            },
            'communication': {
                'siteWeb': false,
                'parselle': false,
                'bureauLocal': true,
                'groupeSeloger': true,
                'lebonCoin': false,
                'territoireMaking': false,
                'transactionCommerce': false,
                'alertesEmailRapprochement': true,
                'informationsMandats': true
            },
            'surface': {
                'surfaceRDC': 140,
                'surfaceRDCFonderee': 150,
                'surfaceVente': true,
                'surfaceSousSol': 50,
                'surfaceSousSolFonderee': 150,
                'surface1Etage': 30,
                'surface1Fonderee': 45,
                'surfaceAutre': 20,
                'surfaceTotale': 400,
                'surfaceFonderee': 300,
                'nouvelleSurfaceFonderee': 300
            },
            'contacts': [{
                'nom': 'Toto',
                'prenom': 'Tata'
            },
            {
                'nom': 'Titi',
                'prenom': 'Tuto'
            }
            ]

        }];
}
