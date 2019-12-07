let restaurant = {
    name: 'Nom Nom',
    guestCapacity: 75,
    guestCount: 12,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}


restaurant.seatParty(60)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(40)
console.log(restaurant.checkAvailability(4))