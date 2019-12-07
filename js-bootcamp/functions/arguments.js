/*
let add = function (a, b) {
    return a + b
}

let result = add(10, 1)
console.log(result)


// default arguments
let getScoreTest = function (name, score = 0) {
    return `Name: ${name} - Score: ${score}`
}

let scoreTest = getScoreTest(undefined, 99)
console.log(scoreTest)
*/

//Challenge


let tipCalc = function(bill, tipPercent = .2) {
    return `A ${tipPercent * 100}% tip on your $${bill} bill would be $${bill * tipPercent}.`
}

let result = tipCalc(100, .2)
console.log(result)


