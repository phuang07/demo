function Car(config) {
    this.type = config.type;
    this.doors = config.doors;
}

Car.prototype.setType = function (type) {
    this.type = type;
}

Car.prototype.getType = function() {
    return this.type;
}

Car.prototype.getDoors = function () {
    return this.doors;
}