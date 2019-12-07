
let greetUser = function (number) {
    console.log('Welcome user.')
}

greetUser()

let square = function(num) {
    let result = num * num
    return result
}

let value = square(33)
let otherValue = square(9534)

console.log(value)
console.log(otherValue)



let convert = function(temp) {
    let result = (temp -32) * 5 / 9
    return result
}

let temp1 = convert(32)
let temp2 = convert(0)
let temp3 = convert(100)

console.log(temp1, temp2, temp3)