import { randomUUID } from "crypto"

abstract class User {
    private _id: String
    private _email: String
    private _password: String
    private _loggedIn: Boolean = false
    static loggedIn: boolean

    constructor(userEmail: String,
        userPassword: String) {
            this._id = randomUUID()
            this._email = userEmail,
            this._password = userPassword
    }

    private getUserId(): String{
        return this._id
    }

    private getUserEmail(): String{
        return this._email
    }

    private getUserLoginStatus(): Boolean{
        return this._loggedIn
    }

    private setUserLoginStatus(): void{
        this._loggedIn = !this.getUserLoginStatus()
    }

    public logIn(): void{
        if (this.getUserLoginStatus() === false){
            this.setUserLoginStatus()
        }

        console.log("User logged in!")
    }

    public logOut(): void{
        if (this.getUserLoginStatus() === true){
            this.setUserLoginStatus()
        }

        console.log("User logged out!")
    }

}

class Client extends User {
    private _address: Object

    constructor(
        clientEmail: String,
        clientPassword: String,
        clientAddress: Object){
            super(clientEmail, clientPassword)
            this._address = clientAddress
    }

    private getAddress(): Object{
        return this._address
    }

    public getClientAddress(): Object{
        return this.getAddress()
    }


}

class Adm extends User {
    private _companyId: String

    constructor(
        admEmail: String,
        admPassword: String,
        admCompanyId: String){
            super(admEmail, admPassword)
            this._companyId = admCompanyId
    }

    private getCompanyId(): String{
        return this._companyId
    }

    public getAdmCompanyId(): String{
        return this.getCompanyId()
    }


}

export { User, Client, Adm }
