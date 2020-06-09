// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return "Hello," + this.greeting;
//     }
// }

// let greeter = new Greeter("world");
// console.log(greeter)

// 继承
// class Animal {
//     move(distanceInMeters: number = 0) {
//         console.log(`Animal moved ${distanceInMeters}m.`);
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log("Woof! Woof!");
//     }
// }

// const dog = new Dog();
// dog.bark();
// dog.move(10);
// dog.bark()

// private

class Animal{
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}


class Rhino extends Animal {
    constructor() {
        super("Rhino");
    }
}

class Employee {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
animal = employee;



