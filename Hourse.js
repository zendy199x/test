function Dog() {
    this.name = name;
    this.stomach = [];
}

Dog.prototype.eat = function(cat) {
    this.stomach.push(cat);
};

Dog.prototype.sayHi = function() {
    console.log("Hi. Dog" + chalk.blue(this.name));
};

module.exports = Dog;
