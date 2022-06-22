const { faker } = require('@faker-js/faker')

module.exports = {
  email: "patrickazu@zohomail.com",
  password: "password",
  address: {
    country: faker.address.country(),
    name: faker.name.findName(),
    phone: faker.phone.phoneNumber('##########'),
    zip: faker.address.zipCode('#####'),
    street: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state()
  },
  card: {
    number: faker.finance.creditCardNumber('################'),
    name: faker.name.findName()
  }
}