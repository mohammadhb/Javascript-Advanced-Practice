/*
    The Template Method pattern provides an outline of a series of steps for an algorithm.
    Objects that implement these steps retain the original structure of the algorithm but have the option to redefine or adjust certain steps.
    This pattern is designed to offer extensibility to the client developer.

    Using:
    Template Methods are frequently used in general purpose frameworks or libraries that will be used by other developer An example is an object that fires a sequence of events in response to an action, for example a process request.
    The object generates a 'preprocess' event, a 'process' event and a 'postprocess' event.
    The developer has the option to adjust the response to immediately before the processing, during the processing and immediately after the processing.
    An easy way to think of Template Method is that of an algorithm with holes (see diagram below). It is up to the developer to fill these holes with appropriate functionality for each step.

*/

//ES6+
class datastore{
    process() {
        this.connect();
        this.select();
        this.disconnect();
        return true;
    }
};

function inherit(proto) {
    let F = class Template extends proto{}
    return new F();
}

function run() {
    let mySql = inherit(datastore);

    // implement template steps
    mySql.connect = function () { console.log("MySQL: connect step"); };
    mySql.select = function () { console.log("MySQL: select step"); };
    mySql.disconnect = function () { console.log("MySQL: disconnect step"); };

    mySql.process();
}

//ES5
var datastore = {
    process: function () {
        this.connect();
        this.select();
        this.disconnect();
        return true;
    }
};

function inherit(proto) {
    var F = function () { };
    F.prototype = proto;
    return new F();
}

function run() {
    var mySql = inherit(datastore);

    // implement template steps
    mySql.connect = function () {
        console.log("MySQL: connect step");
    };

    mySql.select = function () {
        console.log("MySQL: select step");
    };

    mySql.disconnect = function () {
        console.log("MySQL: disconnect step");
    };

    mySql.process();
}
