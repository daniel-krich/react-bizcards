import { generateHexString } from '../util/generateHexString';

export class UserType {
    static Visitor = null;
    static Regular = 'REGULAR';
    static Business = 'BUSINESS';
}

export class UserModel {
    constructor(email, password, name, type) {
        this.id = generateHexString();
        this.email = email;
        this.password = password;
        this.name = name;
        this.type = type;
        this.businessCards = [];
    }
}