module.exports = {
  car: 5,
  bike: 5,

  explain: function greenerPlace () {
    console.log(++this.car);
    console.log(--this.bike);

  }
};