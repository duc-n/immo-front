// tslint:disable-next-line: class-name
export class REST_URLS {
    public static LOGIN = 'login';
    public static SIGNUP = 'user/signup';
    public static BIEN_CREATE = 'bien/create';
    public static BIEN_GET = 'bien/:id';
    public static BIEN_UPDATE = 'bien';
    public static BIEN_GET_BIEN_ETAT_CREATION = 'bien/getBiensEtatCreation';
    public static BIEN_RECHERCHE = 'bien/rechercherBien';
    public static CLIENT_CLIENT_LOOKUP = 'client/clientLookup';
    public static USERS = 'user';
    public static USER_PROFILE = 'user/profile';
    public static FILE_UPLOAD = 'multipart/fs/:id';
    public static FILE_DELETE = 'multipart/delete';
}