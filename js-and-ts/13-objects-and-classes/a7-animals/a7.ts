class Animal {
  constructor(public weight: number, public cuteness: number) {}
  makeSound(): void {
    console.log("silence");
  }
}

const animal = new Animal(6.5, 4.0);
animal.makeSound(); // silence
console.log(animal); //Animal { weight: 6.5, cuteness: 4 }

class Cat extends Animal {
  constructor(public weight: number, public cuteness: number) {
    super(weight, cuteness);
  }
  override makeSound(): void {
    console.log("meow");
  }
}
const cat = new Cat(4.5, 3.0);
cat.makeSound(); //meow
console.log(cat); //Cat { weight: 4.5, cuteness: 3 }

class Dog extends Animal {
  breed: string;
  constructor(public weight: number, public cuteness: number, breed: string) {
    super(weight, cuteness);
    this.breed = breed;
  }
  override makeSound(): void {
    if (this.cuteness > 4) {
      console.log("awoo");
    } else {
      console.log("bark");
    }
  }
}
const dog1 = new Dog(7.0, 4.5, "kleinspitz");
const dog2 = new Dog(30.0, 3.75, "labrador");
dog1.makeSound(); // awoo
dog2.makeSound(); //bark
