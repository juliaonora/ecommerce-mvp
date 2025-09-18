"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const crypto_1 = require("crypto");
class Company {
    constructor(companyCnpj, companyName, companyAddress) {
        this._products = [];
        this._id = (0, crypto_1.randomUUID)(),
            this._cnpj = companyCnpj,
            this._socialName = companyName,
            this._address = companyAddress;
    }
    getId() {
        return this._id;
    }
    getAddress() {
        return this._address;
    }
    getProducts() {
        return this._products;
    }
    addProduct(companyId, product) {
        if (companyId === this._id) {
            this._products.push(product);
            console.log("Product added successfully!");
        }
        else {
            console.log("Invalid company ID or input product format...");
            console.log("Product not added!");
        }
    }
    listAllProducts(companyId, product) {
        console.log(`Company ${this.getId()} products:`);
        const list = this.getProducts();
        list.forEach(element => {
            console.log(element);
        });
        return list;
    }
    deleteProduct(companyId, product) {
        const products = this.getProducts();
        let list = [];
        products.forEach(element => {
            if (element !== product) {
                list.push(element);
            }
        });
        console.log("Product deleted successfully!");
        return list;
    }
}
exports.Company = Company;
