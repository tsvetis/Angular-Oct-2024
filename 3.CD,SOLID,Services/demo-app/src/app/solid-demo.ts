// // Single Responsibility
// class User2 {
//   firstName: string;
//   lastName: string;
//   address: string;

//   constructor(firstName: string, lastName: string, address: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.address = address;
//   }

//   getDetails() {
//     console.log(`${this.firstName} ${this.lastName} is from ${this.address}`);
//   }
// }

// class Wallet {
//   balance: number;
//   currency: string;

//   constructor(balance: number, currency: string) {
//     this.balance = balance;
//     this.currency = currency;
//   }
//   addMoney() {}

//   removeMoney() {}
// }

// // BAD PRACTICE
// class UserWithWalletAndCar {
//   firstName: string;
//   lastName: string;
//   address: string;
//   balance: number;
//   currency: string;
//   carColor: string;
//   carType: string;

//   constructor(
//     firstName: string,
//     lastName: string,
//     address: string,
//     balance: number,
//     currency: string,
//     carColor: string,
//     carType: string
//   ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.address = address;
//     this.balance = balance;
//     this.currency = currency;
//     this.carColor = carColor;
//     this.carType = carType;
//   }
// }

// interface Address {
//   str: string;
//   country: string;
// }

// interface WalletDetails {
//   type: string;
//   balance: number;
//   currency: string;
// }

// interface PersonPrivateDetails {
//   firstName: string;
//   lastName: string;
// }

// interface PersonPublicDetails extends PersonPrivateDetails, WalletDetails {
//   address: Address;
// }

// class Person implements PersonPrivateDetails {
//   firstName: string;
//   lastName: string;

//   constructor(firstName: string, lastName: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// Dependency Inversion is the RULE
// Dependency Injection -> realization of the rule (Design Pattern)

class Wallet {
  balance = 0;
  currency = 'EUR';

  constructor(balance: number, currency: string) {
    this.balance = balance;
    this.currency = currency;
  }
}

class Car {
  model: string;
  color: string;

  constructor(model: string, color: string) {
    this.model = model;
    this.color = color;
  }
}

// WORST PRACTICE!
// class User {
//   name: string;
//   wallet: Wallet;
//   car: Car;

//   constructor(
//     name: string,
//     balance: number,
//     currency: string,
//     model: string,
//     carColor: string
//   ) {
//     this.name = name;
//     this.wallet = new Wallet(balance, currency);
//     this.car = new Car(model, carColor);
//   }
// }

class User {
  name: string;
  wallet: Wallet;
  car: Car;

  constructor(name: string, wallet: Wallet, car: Car) {
    this.name = name;
    this.wallet = wallet;
    this.car = car;
  }
}

const peshoWallet = new Wallet(500, 'USD');
const peshosCar = new Car('VW', 'blue');
const userPesho = new User('Pesho', peshoWallet, peshosCar);
// userPesho.wallet.balance // 500

const mariaWallet = new Wallet(3500, 'BGN');
const mariaCar = new Car('Mercedes', 'red');
const userMaria = new User('Maria', mariaWallet, mariaCar);
// userMaria.wallet.balance // 400
