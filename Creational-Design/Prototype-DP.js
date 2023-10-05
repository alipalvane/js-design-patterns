// Prototype Pattern - Creational Design
const macBook = {
  color: "silver",
  turnOn() {
    console.log("turn on");
  },
  turnOff() {
    console.log("truning off");
  },
};

// Proper prototype cloning
const computer = Object.create(macBook,{
    mouse:{value:true},
    speaker:{value:false},
    warranty:{value:'2 Years'}
})
console.log(computer.__proto__ === macBook);
console.log(computer)
console.log(computer.color)
console.log(computer.turnOn())

// Not a prototype copy
const phone = {...macBook, usb:'Type-C', owner:'lionel'}
console.log(phone.__proto__ === macBook)
console.log(phone)
console.log(phone.turnOff())

macBook.headphone = 'Xiaomi';

console.log(computer.headphone)
console.log(phone.headphone)