import { randomUUID } from "crypto"

class Product {
    private _id: String
    private _brand: String
    private _name: String
    private _price: Number
    private _status: Boolean = true
    private _companyId: String

    constructor(productBrand: String,
                productName: String,
                productPrice: Number,
                productCompanyId: String){
                    this._id = randomUUID(),
                    this._brand = productBrand,
                    this._name = productName,
                    this._price = productPrice,
                    this._companyId = productCompanyId
                }

    private getId(): String{
        return this._id
    }

    private getBrand(): String{
        return this._brand
    }

    private getName(): String{
        return this._name
    }

    private getPrice(): Number{
        return this._price
    }

    private getStatus(): Boolean{
        return this._status
    }

    private getCompanyId(): String{
        return this._companyId
    }

    private setSatus(): void{
        this._status = !this._status
    }

    private setPrice(newPrice: Number): void{
        this._price = newPrice
    }

    public changeStatus(producId: String, newStatus: Boolean){
        const products = 0
    }

}

export { Product }