// Object literal

const obj = {
  name: 'bob',
  age: 22,
  city: 'Lisbon'
}


class Person {
  constructor(nameV, ageV, cityV) {
    this.name = nameV;
    this.age = ageV;
    this.city = cityV;
  }

  printName() {
    console.log("Name is: ", this.name)
  }

}


const person1 = new Person('Uros', 32, 'Barcelona');
const person2 = new Person('Clara', 34, 'Lisbon');

console.log(person1);
console.log(person2);


person1.printName()
person2.printName()

console.log(`person1.__proto__`, person1.__proto__)