const Animal = function (type) {
  this.type = type || "dog";
};

const dog = new Animal("dog");
const cat = new Animal("cat");

dog.sound = function () {
  console.log("woof woof!");
  return this;
};

cat.jump = function () {
  console.log("mewo mewo!");
  return this;
};

dog.sound();
cat.jump();
