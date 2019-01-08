const Park = function (name, ticketPrice, collectionOfDinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = collectionOfDinosaurs;
}

Park.prototype.addDinosaur = function (dinosaur) {
    this.collectionOfDinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  this.collectionOfDinosaurs.pop(dinosaur)
};

Park.prototype.findMostPopularDinosaur = function (dinosaur) {
  this.collectionOfDinosaurs.splice(dinosaur)
};

module.exports = Park;
