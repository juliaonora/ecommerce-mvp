import { randomUUID } from "crypto"

class Company {
    private _id: String
    private _cnpj: String
    private _socialName: String
    private _address: Object
    private _products: String[] = []

    constructor(companyCnpj: String,
                companyName: String,
                companyAddress: Object){
                    this._id = randomUUID(),
                    this._cnpj = companyCnpj,
                    this._socialName = companyName,
                    this._address = companyAddress
                }

    private getId(): String{
        return this._id
    }

    private getAddress(): Object{
        return this._address
    }

    private getProducts(): String[]{
        return this._products
    }

    public addProduct(companyId: String, product: String): void{
        if (companyId === this._id) {
            this._products.push(product)
            console.log("Product added successfully!")
        } else {
            console.log("Invalid company ID or input product format...")
            console.log("Product not added!")
        }
    }

    public listAllProducts(companyId: String, product: String){
        console.log(`Company ${this.getId()} products:`)
        const list = this.getProducts()

        list.forEach(element => {
            console.log(element)
        })

        return list
    }

    public deleteProduct(companyId: String, product: String){
        const products = this.getProducts()
        let list: String[] = []

        products.forEach(element => {
            if (element !== product){
                list.push(element)
            }
        })

        console.log("Product deleted successfully!")
        return list
    }

}

export { Company }