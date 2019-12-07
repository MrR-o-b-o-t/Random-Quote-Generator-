const notes = [{
    title: 'Vacation',
    body: 'Go to Hawaii.',
}, {
    title: 'code',
    body: 'Work through section 7.',
},{
    title: 'Send letter to cc.',
    body: 'Send pre-written letter via usps.'
}]

const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note, index) {
        return note.title === noteTitle
    })
    return notes[index]
}

const note = findNote(note, '')
console.log(note)


// console.log(notes.length)
// console.log(notes[2])


// const index = notes.findIndex( function(note, index) {
//     return note.body === 'Send pre-written letter via usps.'
// })

// console.log(index)