/*
  New Binding "this"
*/
function Person(name, age){
  this.name = name;
  this.age = age;
  this.hi = function(){
    console.log("Hi", this.name); // this refers to person1
  }
}

const person1 = new Person("Mohammad", 28);
person1.hi() //Hi Mohammad

/*
  Implicit Binding "this"
*/
const person2 = {
  name: "Sanaz",
  age: 26,
  hi: function(){
    console.log("Hi", this.name); // this refers to person2
  }
}
person2.hi(); //Hi Sanaz

/*
  Explicit Binding "this"
*/
const person3 = {
  hi: function(){
    console.log("Hi", this.name); // this refers to person3
  }.bind(person2)
}
person3.hi(); //Hi Sanaz

/*
  Arrow function Binding "this"
*/
const person4 = {
  name: "Amin",
  age: 27,
  hi: function(){
    var inner = ()=>{ // because we used a arrow function
      console.log("Hi", this.name); // this refers to person4
    }
    return inner();
  }
}
person4.hi(); //Hi Amin

const person5 = {
  name: "Amin",
  age: 27,
  hi: function(){
    var inner = function (){ // because we used a regular function
      console.log("Hi", this.name); // this refers to window
    }
    return inner();
  }
}
person5.hi(); //Hi undefined
