"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const cpf_cnpj_validator_1 = require("cpf-cnpj-validator");
const user_1 = require("./repositories/user");
const company_1 = require("./repositories/company");
const clients = Array.from({ length: 3 }, () => {
    return new user_1.Client(faker_1.faker.internet.email(), faker_1.faker.internet.password(), {
        street: faker_1.faker.location.street(),
        number: faker_1.faker.number.int({ min: 1, max: 1000 }),
        state: faker_1.faker.location.state(),
        country: faker_1.faker.location.country()
    });
});
console.log(clients);
const companies = Array.from({ length: 3 }, () => {
    return new company_1.Company(String(cpf_cnpj_validator_1.cnpj.generate()), faker_1.faker.company.name(), {
        street: faker_1.faker.location.street(),
        number: faker_1.faker.number.int({ min: 1, max: 1000 }),
        state: faker_1.faker.location.state(),
        country: faker_1.faker.location.country()
    });
});
console.log(companies);
