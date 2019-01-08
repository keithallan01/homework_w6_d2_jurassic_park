const Park = function (name, ticketPrice, collectionOfDinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = collectionOfDinosaurs;
}

Park.prototype.addDinosaur = function (dinosaur) {
    this.collectionOfDinosaurs.push(dinosaur);
};

module.exports = Park;
