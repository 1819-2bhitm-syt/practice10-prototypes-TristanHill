function Square(length){
    this.length = length;
}

Square.prototype.getArea =function (){
    return this.length * this.length;
};

Square.prototype.getCircumfrence = function(){
    return this.length * 4;
};

module.exports = Square;