"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const crypto_1 = require("crypto");
class Product {
    constructor(productBrand, productName, productPrice, productCompanyId) {
        this._status = true;
        this._id = (0, crypto_1.randomUUID)(),
            this._brand = productBrand,
            this._name = productName,
            this._price = productPrice,
            this._companyId = productCompanyId;
    }
    getId() {
        return this._id;
    }
    getBrand() {
        return this._brand;
    }
    getName() {
        return this._name;
    }
    getPrice() {
        return this._price;
    }
    getStatus() {
        return this._status;
    }
    getCompanyId() {
        return this._companyId;
    }
    setSatus() {
        this._status = !this._status;
    }
    setPrice(newPrice) {
        this._price = newPrice;
    }
    changeStatus(producId, newStatus) {
        const products = 0;
    }
}
exports.Product = Product;
