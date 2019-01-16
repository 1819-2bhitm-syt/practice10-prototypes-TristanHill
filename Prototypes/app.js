let Square = require("./square.js");
let Rectangle = require("./rectangle.js");

let figures = [new Square(2), new Square(5), new Square(10), new Rectangle(5,3), new Rectangle(10, 4)];

for(let figure of figures){
    console.log(figure);
    console.log("Fläche: "+figure.getArea());
    console.log("Umfang: "+figure.getCircumfrence());
    console.log();
}