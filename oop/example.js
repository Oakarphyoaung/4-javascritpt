// class Person {
//   constructor(name, age, gender, hometown) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.hometown = hometown;
//     this.prefix = this.gender === "male" ? "Mr." : "Ms.";
//   }
//   intro() {
//     return `I'm ${this.prefix}${this.name} and ${this.age} year old and from ${this.hometown} major is ${this.major}`;
//   }
// }
// const p1 = new Person("ohkar", 26, "male", "mawlamyine");
// console.log(p1);
// console.log(p1.intro());

// class student extends Person {
//   constructor(name, age, gender, hometown, major) {
//     super(name, age, gender, hometown);
//     this.major = major;
//   }
// }
// const st1 = new student("OK par", 25, "female", "hpa-an");
// console.log(st1);
// console.log(st1.intro());

// const st2 = new student("ei phyu", 26, "female", "mae-sot", "geology");
// console.log(st2);
// console.log(st2.intro());

// const Monitor extends student {
//   constructor (name,age,gender,hometown,room) {
//     super(name,age,gender,hometown);
//     this.room = room;
//   }

// }

// const d = new Date();
// console.log(d.getDate());

// console.dir(Math);
// console.dir(Audio);
// const audio = new Audio();

// console.dir(audio);
class BankAccount {
  #balance = 0;
  #record = [];
  #recordIndex = 0;
  constructor(name, number) {
    this.name = name;
    this.number = number;
  }
  // getter,setter
  checkbalance() {
    return this.#balance;
  }
  history() {
    return this.#record;
  }

  // setter
  deposit(amount) {
    this.#balance += amount;
    this.#record[this.#recordIndex++] = "Deposite " + amount;
    return "Deposite " + amount;
  }
  withdraw(amount) {
    this.#balance -= amount;
    return "Withdraw " + amount;
  }
  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      this.#record[this.#recordIndex++] = "Withdraw " + amount;
      return "Withdraw" + amount;
    }
    this.#record[this.#recordIndex++] = "Not enough balance ";
    return "Not enough balance ";
  }
}
const ba = new BankAccount("Ohkar", 1234);
console.log(ba.name);
console.log(ba.checkbalance());
console.log(ba.deposit(50000));
console.log(ba.checkbalance());
console.log(ba.deposit(100000));
console.log(ba.checkbalance());
console.log(ba.deposit(500000));
console.log(ba.withdraw(50000));
console.log(ba.withdraw(70000));
console.log(ba.withdraw(70000));
console.log(ba.withdraw(390010));
console.log(ba.withdraw(390010));
console.log(ba.withdraw(390010));
console.log(ba.withdraw(69990));
console.log(ba.withdraw(69990));
console.log(ba.deposit(500000));
console.log(ba.deposit(100000));
console.log(ba.deposit(200000));
console.log(ba.deposit(300000));
console.log(ba.deposit(300000));
console.log(ba.withdraw(400000));
console.log(ba.withdraw(400000));
console.log(ba.withdraw(400000));
console.log(ba.withdraw(400000));
console.table(ba.history());
console.log(ba.checkbalance());
