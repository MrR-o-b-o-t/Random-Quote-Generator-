
let studentScore = function(score, total) {
    let grade =  (score / total) * 100
    let letterGrade = ''

    if (grade >= 90) { 
        letterGrade='A'
    } else if (grade <= 89 && grade >= 80){
        letterGrade='B'
    } else if (grade <= 79 && grade >= 70) {
        letterGrade='C'
    } else if (grade <= 69 && grade >= 60) {
        letterGrade='D'
    } else {
        letterGrade='F'
    }

    return  `You got ${score} questions correct out of ${total} questions and made a ${letterGrade}.`
}

let value = studentScore(80,100)
console.log(value)
