let helloMsg: string = "Hello, there!";
let a: number = 134;
let b: number = 5;

let isAuthenticate: boolean = false;

const arr: number[] = [1, 2, 3, 4, 5];
console.log(arr.filter((n) => n > 3));

let x: number | string = 123;
x = "asd";
x = 213;

// interface User {
//   name: string;
//   age: number;
// }

type User = {
  name: string;
  age: number;
};

const peshoUser: User = {
  name: "Pesho",
  age: 23,
};

const users: User[] = [
  {
    name: "Pesho1",
    age: 23,
  },
  {
    name: "Pesho2",
    age: 23,
  },
  {
    name: "Pesho3",
    age: 23,
  },
];

users.forEach((user) => {
  console.log(user.name);
});

interface Human {
  firstName: string;
  lastName: string;
  age: number;
}

class Person implements Human {
  firstName: string;
  lastName: string;
  age: number = 10;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getAgeMsg(): string {
    return `This human is ${this.age} y/o!`;
  }

  getDetails(): void {
    console.log(`Person details: ${this.firstName} ${this.lastName}`);
  }
}

const ivanPerson = new Person("Ivan", "Ivanov");
ivanPerson.getDetails();

class Student extends Person {
  grades: number[] = [6, 5, 6, 5, 4];

  constructor(fName: string, lName: string) {
    super(fName, lName);
  }
}

const mariikaStudent = new Student("Maria", "Kirilova");
mariikaStudent.getDetails();

enum PaymentStatus {
  Failed = 100,
  Successful,
  Pending,
}

console.log("------------------------");

function checkPaymentStatus(paymentStatusCode: number): void {
  if (paymentStatusCode === PaymentStatus.Failed) {
    console.log("Ne e minalo plashtaneto");
  } else if (paymentStatusCode === PaymentStatus.Successful) {
    console.log("Uspeshno plashtane!");
  }
}

checkPaymentStatus(100);

function getIdentity<T>(id: T) {
  console.log("The type of the id is: " + typeof id);
}

getIdentity<number>(123);
getIdentity<string>("akjsdhkasjhdkjsa");
getIdentity<string[]>(["a", "b", "c"]);
