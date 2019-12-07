const array = [
    'Walk the dog',
    'Code',
    'Interview',
    'Vacation',
    'Workout'
]

// console.log(array.pop())
// array.push('New note')

//array.splice(2, 1, 'New item')



console.log(`You have ${array.length} todos.`)

array.forEach(function(item, index) {
    console.log(`${index + 1}. ${item}.`)
})

console.log(`Todo: ${array[0]}`)
console.log(`Todo: ${array}`)

array.splice(2, 1)
array.push('should be last')
array.shift()

console.log(array)

// for (let count = 0; count < array.length; count++) {
//     console.log(`${count + 1}. ${array[count]}`)
// }