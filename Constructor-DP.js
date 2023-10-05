// Constructor Pattern - Creational Design
class Person {
  constructor(name, age, mother) {
    this.name = name;
    this.age = age;
    this.mother = mother;
  }
}

const tim = new Person('tim', 25, null)
const tina = new Person('tina', 22, null)

tim.mother = 'yuli'

console.log(tim)

const grandma = new Person('Sherry', 80, null);

tina.mother = grandma

console.log(tina)
