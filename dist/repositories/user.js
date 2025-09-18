"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adm = exports.Client = exports.User = void 0;
const crypto_1 = require("crypto");
class User {
    constructor(userEmail, userPassword) {
        this._loggedIn = false;
        this._id = (0, crypto_1.randomUUID)();
        this._email = userEmail,
            this._password = userPassword;
    }
    getUserId() {
        return this._id;
    }
    getUserEmail() {
        return this._email;
    }
    getUserLoginStatus() {
        return this._loggedIn;
    }
    setUserLoginStatus() {
        this._loggedIn = !this.getUserLoginStatus();
    }
    logIn() {
        if (this.getUserLoginStatus() === false) {
            this.setUserLoginStatus();
        }
        console.log("User logged in!");
    }
    logOut() {
        if (this.getUserLoginStatus() === true) {
            this.setUserLoginStatus();
        }
        console.log("User logged out!");
    }
}
exports.User = User;
class Client extends User {
    constructor(clientEmail, clientPassword, clientAddress) {
        super(clientEmail, clientPassword);
        this._address = clientAddress;
    }
    getAddress() {
        return this._address;
    }
    getClientAddress() {
        return this.getAddress();
    }
}
exports.Client = Client;
class Adm extends User {
    constructor(admEmail, admPassword, admCompanyId) {
        super(admEmail, admPassword);
        this._companyId = admCompanyId;
    }
    getCompanyId() {
        return this._companyId;
    }
    getAdmCompanyId() {
        return this.getCompanyId();
    }
}
exports.Adm = Adm;
