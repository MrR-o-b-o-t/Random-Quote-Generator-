
let isGuestOneVegan = true
let isGuestTwoVegan = true

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Offer only vegan dishes.')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Offer some vegan dishes.')
} else {
    console.log('Offer any dish.')
}