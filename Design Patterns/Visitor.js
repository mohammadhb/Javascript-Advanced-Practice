/*
    The Visitor pattern defines a new operation to a collection of objects without changing the objects themselves.
    The new logic resides in a separate object called the Visitor.

    Using:
    Visitors are useful when building extensibility in a library or framework.
    If the objects in your project provide a 'visit' method that accepts a Visitor object which can make changes to the receiving object\
    then you are providing an easy way for clients to implement future extensions.
    In most programming languages the Visitor pattern requires that the original developer anticipates functional adjustments in the future.
    This is done by including methods that accept a Visitor and let it operate on the original collection of objects.
    Visitor is not important to JavaScript because it offers far more flexibility by the ability to add and remove methods at runtime.
    To learn more about this flexibility and how it benefits JavaScript patterns and pattern architectures see our Dofactory JS.


*/


//ES6+
class Employee{

    constructor(name, salary, vacation){
        this.name = name;
        this.salary = salary;
        this.vacation = vacation;
    }

    accept(visitor) { visitor.visit(this); };

    getName() {return name; };

    getSalary() { return salary; };
    setSalary(sal) { this.salary = sal; };

    getVacation() { return vacation; };
    setVacation(vac) { this.vacation = vac; };
};

class ExtraSalary{
    visit(emp){ emp.setSalary(emp.getSalary() * 1.1); };
};

class ExtraVacation{
    visit(emp){  emp.setVacation(emp.getVacation() + 2); };
};

function run() {

    var employees = [
        new Employee("John", 10000, 10),
        new Employee("Mary", 20000, 21),
        new Employee("Boss", 250000, 51)
    ];

    var visitorSalary = new ExtraSalary();
    var visitorVacation = new ExtraVacation();

    for (var i = 0, len = employees.length; i < len; i++) {
        var emp = employees[i];

        emp.accept(visitorSalary);
        emp.accept(visitorVacation);
        console.log(emp.getName() + ": $" + emp.getSalary() + " and " + emp.getVacation() + " vacation days");
    }
}

//ES5
var Employee = function (name, salary, vacation) {
    var self = this;

    this.accept = function (visitor) {
        visitor.visit(self);
    };

    this.getName = function () {
        return name;
    };

    this.getSalary = function () {
        return salary;
    };

    this.setSalary = function (sal) {
        salary = sal;
    };

    this.getVacation = function () {
        return vacation;
    };

    this.setVacation = function (vac) {
        vacation = vac;
    };
};

var ExtraSalary = function () {
    this.visit = function (emp) {
        emp.setSalary(emp.getSalary() * 1.1);
    };
};

var ExtraVacation = function () {
    this.visit = function (emp) {
        emp.setVacation(emp.getVacation() + 2);
    };
};

function run() {

    var employees = [
        new Employee("John", 10000, 10),
        new Employee("Mary", 20000, 21),
        new Employee("Boss", 250000, 51)
    ];

    var visitorSalary = new ExtraSalary();
    var visitorVacation = new ExtraVacation();

    for (var i = 0, len = employees.length; i < len; i++) {
        var emp = employees[i];

        emp.accept(visitorSalary);
        emp.accept(visitorVacation);
        console.log(emp.getName() + ": $" + emp.getSalary() +
            " and " + emp.getVacation() + " vacation days");
    }
}
