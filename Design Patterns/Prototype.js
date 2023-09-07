//ES6+

class Customer{

  constructor(first, last, status){
    this.first = first;
    this.last = last;
    this.status = status;
  }
  say() {
      console.log(`name: ${this.first} ${this.last}, status: ${this.status}`);
  };
}

class CustomerPrototype{
  constructor(proto){
    this.proto = proto;
  }
  clone() {
      let customer = new Customer();
    
      customer.first = proto.first;
      customer.last = proto.last;
      customer.status = proto.status;
  
      return customer;
  };
}

function run() {

    let proto = new Customer("n/a", "n/a", "pending");
    let prototype = new CustomerPrototype(proto);

    let customer = prototype.clone();
    customer.say();
}

//ES5
function CustomerPrototype(proto) {
    this.proto = proto;

    this.clone = function () {
        var customer = new Customer();

        customer.first = proto.first;
        customer.last = proto.last;
        customer.status = proto.status;

        return customer;
    };
}

function Customer(first, last, status) {

    this.first = first;
    this.last = last;
    this.status = status;

    this.say = function () {
        console.log("name: " + this.first + " " + this.last +
            ", status: " + this.status);
    };
}

function run() {

    var proto = new Customer("n/a", "n/a", "pending");
    var prototype = new CustomerPrototype(proto);

    var customer = prototype.clone();
    customer.say();
}
