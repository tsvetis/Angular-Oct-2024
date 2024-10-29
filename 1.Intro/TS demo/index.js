var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var helloMsg = "Hello, there!";
var a = 134;
var b = 5;
var isAuthenticate = false;
var arr = [1, 2, 3, 4, 5];
console.log(arr.filter(function (n) { return n > 3; }));
var x = 123;
x = "asd";
x = 213;
var peshoUser = {
    name: "Pesho",
    age: 23,
};
var users = [
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
users.forEach(function (user) {
    console.log(user.name);
});
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.age = 10;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getAgeMsg = function () {
        return "This human is ".concat(this.age, " y/o!");
    };
    Person.prototype.getDetails = function () {
        console.log("Person details: ".concat(this.firstName, " ").concat(this.lastName));
    };
    return Person;
}());
var ivanPerson = new Person("Ivan", "Ivanov");
ivanPerson.getDetails();
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(fName, lName) {
        var _this = _super.call(this, fName, lName) || this;
        _this.grades = [6, 5, 6, 5, 4];
        return _this;
    }
    return Student;
}(Person));
var mariikaStudent = new Student("Maria", "Kirilova");
mariikaStudent.getDetails();
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Failed"] = 100] = "Failed";
    PaymentStatus[PaymentStatus["Successful"] = 101] = "Successful";
    PaymentStatus[PaymentStatus["Pending"] = 102] = "Pending";
})(PaymentStatus || (PaymentStatus = {}));
console.log("------------------------");
function checkPaymentStatus(paymentStatusCode) {
    if (paymentStatusCode === PaymentStatus.Failed) {
        console.log("Ne e minalo plashtaneto");
    }
    else if (paymentStatusCode === PaymentStatus.Successful) {
        console.log("Uspeshno plashtane!");
    }
}
checkPaymentStatus(100);
function getIdentity(id) {
    console.log("The type of the id is: " + typeof id);
}
getIdentity(123);
getIdentity("akjsdhkasjhdkjsa");
