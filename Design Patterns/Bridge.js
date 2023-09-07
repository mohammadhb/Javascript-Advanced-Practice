

//ES6+
// input devices
class Gestures {
    constructor(output){
        this.output = output;
    }

    tap() { this.output.click(); }
    swipe() { this.output.move(); }
    pan() { this.output.drag(); }
    pinch() { this.output.zoom(); }
}

class Mouse {
    constructor(output){
        this.output = output;
    }

    click() { this.output.click(); }
    move() { this.output.move(); }
    down() { this.output.drag(); }
    wheel() { this.output.zoom(); }
}

// output devices
class Screen{
    click() { console.log("Screen select"); }
    move() { console.log("Screen move"); }
    drag() { console.log("Screen drag"); }
    zoom() { console.log("Screen zoom in"); }
}

class Audio{
    click() { console.log("Sound oink"); }
    move() { console.log("Sound waves"); }
    drag() { console.log("Sound screetch"); }
    zoom() { console.log("Sound volume up"); }
}

function run() {

    let screen = new Screen();
    let audio = new Audio();

    let hand = new Gestures(screen);
    let mouse = new Mouse(audio);

    hand.tap();
    hand.swipe();
    hand.pinch();

    mouse.click();
    mouse.move();
    mouse.wheel();
}

//ES5
// input devices
var Gestures = function (output) {
    this.output = output;

    this.tap = function () { this.output.click(); }
    this.swipe = function () { this.output.move(); }
    this.pan = function () { this.output.drag(); }
    this.pinch = function () { this.output.zoom(); }
};

var Mouse = function (output) {
    this.output = output;

    this.click = function () { this.output.click(); }
    this.move = function () { this.output.move(); }
    this.down = function () { this.output.drag(); }
    this.wheel = function () { this.output.zoom(); }
};

// output devices
var Screen = function () {
    this.click = function () { console.log("Screen select"); }
    this.move = function () { console.log("Screen move"); }
    this.drag = function () { console.log("Screen drag"); }
    this.zoom = function () { console.log("Screen zoom in"); }
};

var Audio = function () {
    this.click = function () { console.log("Sound oink"); }
    this.move = function () { console.log("Sound waves"); }
    this.drag = function () { console.log("Sound screetch"); }
    this.zoom = function () { console.log("Sound volume up"); }
};

function run() {

    var screen = new Screen();
    var audio = new Audio();

    var hand = new Gestures(screen);
    var mouse = new Mouse(audio);

    hand.tap();
    hand.swipe();
    hand.pinch();

    mouse.click();
    mouse.move();
    mouse.wheel();
}
