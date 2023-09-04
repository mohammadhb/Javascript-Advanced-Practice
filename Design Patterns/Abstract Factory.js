/*
An Abstract Factory creates objects that are related by a common theme.
In object-oriented programming, a Factory is an object that creates other objects.
An Abstract Factory has abstracted out a theme that is shared by the newly created objects.

Using:

Suppose we have two Abstract Factories whose task is to create page controls, such as buttons, textboxes, radio buttons, and list boxes.
One is the Light Factory which creates controls that are white and the other is the Dark Factory which creates controls that are black.
Both Factories create the same types of controls, but they differ in color, which is their common theme.
This is an implementation of the Abstract Factory pattern.
Over time the Abstract Factory and Factory Method patterns have merged into a more general pattern called Factory.
A Factory is simply an object that creates other objects.
You may be wondering why you would want to leave the responsibility of the construction of objects to others rather than simply calling a constructor function with the new keyword directly.
The reason is that constructor functions are limited in their control over the overall creation process and sometimes you will need to hand over control to a factory that has broader knowledge.
This includes scenarios in which the creation process involves object caching, sharing or re-using of objects, complex logic, or applications that maintain object and type counts, and objects that interact with different resources or devices.
If your application needs more control over the object creation process, consider using a Factory.


*/

//ES6+
class Employee{
    constructor(name){
      this.name = name;
    }
    say() {
        console.log("I am employee " + name);
    };
}

class EmployeeFactory{
    create(name) {
        return new Employee(name);
    };
}

class Vendor{
    constructor(name){
      this.name = name;
    }
    say() {
        console.log("I am vendor " + name);
    };
}

class VendorFactory{
    create(name) {
        return new Vendor(name);
    };
}

function run() {
    var persons = [];
    var employeeFactory = new EmployeeFactory();
    var vendorFactory = new VendorFactory();

    persons.push(employeeFactory.create("Joan DiSilva"));
    persons.push(employeeFactory.create("Tim O'Neill"));
    persons.push(vendorFactory.create("Gerald Watson"));
    persons.push(vendorFactory.create("Nicole McNight"));

    for (var i = 0, len = persons.length; i < len; i++) {
        persons[i].say();
    }
}


//ES5
function _Employee(name) {
    this.name = name;
    this.say = function () {
        console.log("I am employee " + name);
    };
}

function _EmployeeFactory() {
    this.create = function(name) {
        return new _Employee(name);
    }; 
}

function _Vendor(name) {
    this.name = name;
    this.say = function () {
        console.log("I am vendor " + name);
    };
}

function _VendorFactory() {
    this.create = function (name) {
        return new _Vendor(name);
    };
}

function _run() {
    var persons = [];
    var employeeFactory = new _EmployeeFactory();
    var vendorFactory = new _VendorFactory();

    persons.push(employeeFactory.create("Joan DiSilva"));
    persons.push(employeeFactory.create("Tim O'Neill"));
    persons.push(vendorFactory.create("Gerald Watson"));
    persons.push(vendorFactory.create("Nicole McNight"));

    for (var i = 0, len = persons.length; i < len; i++) {
        persons[i].say();
    }
}
