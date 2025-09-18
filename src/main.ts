import { faker } from "@faker-js/faker"
import { cnpj } from "cpf-cnpj-validator"
import { User, Client, Adm } from "./repositories/user"
import { Company } from "./repositories/company"

const clients: Client[] = Array.from({ length: 3 }, () => {
  return new Client(
    faker.internet.email(),
    faker.internet.password(),
    { 
      street: faker.location.street(), 
      number: faker.number.int({ min: 1, max: 1000 }),
      state: faker.location.state(),
      country: faker.location.country()
    }
  )
})

console.log(clients)

const companies: Company[] = Array.from({ length: 3 }, () => {
  return new Company(
    String(cnpj.generate()),
    faker.company.name(),
    { 
      street: faker.location.street(), 
      number: faker.number.int({ min: 1, max: 1000 }),
      state: faker.location.state(),
      country: faker.location.country()
    }
  )
})

console.log(companies)