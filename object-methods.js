let restaurant = {
  name: "ASB",
  guestCapacity: 75,
  guestCount: 0,
  checkAvailabilty: function (partySize) {
    // console.log(this); // refers to the restaurant object!
    // console.log(this.guestCapacity); // printing an attribute using this keyword.
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft; // Will Return a boolean
  },
  seatParty: function (partySize) {
    this.guestCount = this.guestCount + partySize; // this.guestCount += 1
  },
  removeParty: function (partySize) {
    this.guestCount = this.guestCount - partySize;
  },
};

// Calling the object function:
// restaurant.checkAvailabilty(4);

// Challenge -> Create two methods: seatParty, removeParty
restaurant.seatParty(72);
console.log(restaurant.checkAvailabilty(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailabilty(4));
