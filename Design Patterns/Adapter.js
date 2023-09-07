//ES6+

// old interface
class Shipping{
    request(zipStart, zipEnd, weight) {
        // ...
        return "$49.75";
    }
}

// new interface
class AdvancedShipping{
    login(credentials) { /* ... */ };
    setStart(start) { /* ... */ };
    setDestination(destination) { /* ... */ };
    calculate(weight) { return "$39.50"; };
}

// adapter interface
class ShippingAdapter{
    constructor(credentials){
        let shipping = new AdvancedShipping();
        shipping.login(credentials);
    }
    
    create(){
        return {
            request: function (zipStart, zipEnd, weight) {
                this.shipping.setStart(zipStart);
                this.shipping.setDestination(zipEnd);
                return this.shipping.calculate(weight);
            }
        };
    }
    
}

function run() {

    let shipping = new Shipping();
    let credentials = { token: "30a8-6ee1" };
    let adapter = new ShippingAdapter(credentials).create();

    // original shipping object and interface

    let cost = shipping.request("78701", "10010", "2 lbs");
    console.log("Old cost: " + cost);

    // new shipping object with adapted interface

    cost = adapter.request("78701", "10010", "2 lbs");

    console.log("New cost: " + cost);
}


//ES5
// old interface
function Shipping() {
    this.request = function (zipStart, zipEnd, weight) {
        // ...
        return "$49.75";
    }
}

// new interface
function AdvancedShipping() {
    this.login = function (credentials) { /* ... */ };
    this.setStart = function (start) { /* ... */ };
    this.setDestination = function (destination) { /* ... */ };
    this.calculate = function (weight) { return "$39.50"; };
}

// adapter interface
function ShippingAdapter(credentials) {
    let shipping = new AdvancedShipping();

    shipping.login(credentials);

    return {
        request: function (zipStart, zipEnd, weight) {
            shipping.setStart(zipStart);
            shipping.setDestination(zipEnd);
            return shipping.calculate(weight);
        }
    };
}

function run() {

    let shipping = new Shipping();
    let credentials = { token: "30a8-6ee1" };
    let adapter = new ShippingAdapter(credentials);

    // original shipping object and interface

    let cost = shipping.request("78701", "10010", "2 lbs");
    console.log("Old cost: " + cost);

    // new shipping object with adapted interface

    cost = adapter.request("78701", "10010", "2 lbs");

    console.log("New cost: " + cost);
}
