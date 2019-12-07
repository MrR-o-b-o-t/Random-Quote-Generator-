let name = '   Sam Kautz'

//length property
console.log(name.length)

// convert uppercase
console.log(name.toUpperCase())

//convert to lower case
console.log(name.toLowerCase())

// includes method
let password = "abcpassword123"

console.log(password.includes('password'))

//trim
console.log(name.trim())

// challange

let isValidPassword = function(password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('asdlfkjasd;flkadf'))
console.log(isValidPassword('2345password'))



