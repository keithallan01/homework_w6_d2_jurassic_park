const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

let park;

  beforeEach(function () {
      dinosaur1 = new Dinosaur ('veloceraptor', 'carnivore', 100);
      dinosaur2 = new Dinosaur ('tricerotops', 'herbivore', 30);
      dinosaur3 = new Dinosaur ('diplodocus', 'herbivore', 20);
      park = new Park('Jurassic Park', 10, [dinosaur1, dinosaur2, dinosaur3]);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });


  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });


  it('should have a collection of dinosaurs', function () {
      const actual = park.collectionOfDinosaurs;
      assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3]);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur('pacisefilasuarus')
    const actual = park.collectionOfDinosaurs.length
    assert.strictEqual(actual, 4);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur('diplodocus')
    const actual = park.collectionOfDinosaurs.length
    assert.strictEqual(actual, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function (){
    park.findMostPopularDinosaur('veloceraptor')
    const actual = dinosaur.species.find
    assert.strictEqual(actual, 'veloceraptor')
  });
  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
