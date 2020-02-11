import { required, alpha, minLength, compare, email } from '@rxweb/reactive-form-validators';

export class UserRegister {
    nom: string;

    @required()
    @alpha()
    prenom: string;

    @required()
    telephone: string;

    @required()
    @email()
    email: string;

    @required()
    admin: boolean;

    @required()
    @minLength({ value: 8 })
    password: string;

    @required()
    @compare({ fieldName: 'password' })
    repassword: string;
}
