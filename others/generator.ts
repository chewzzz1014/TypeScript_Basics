// generator function 
// calling generator function will return a generator object
// follow iterator interface (has next, return, throw function)

// used to create lazy iterator
// this function return an infinite list of integers on demand
function* infiniteSequence() {
    let i = 0;
    while (true) {
        yield i++
    }
}
const iterator = infiniteSequence()
while (true) {
    console.log(iterator.next()) // {value: xxx, done: false} forever
}

// finite iterator (obtain {done: true} at the end)
function* idMaker() {
    let index = 0
    while (index < 3)
        yield index++
}

let gen = idMaker()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())



// externally controlled execution: allow function to pause its execution and pass control of the remainder of the function execution to the caller
function* generator() {
    console.log('Execution started')
    yield 0 // function pause
    console.log('Execution resumed')
    yield 1 // function pause
    console.log('Execution resumed')
}
const iterator1 = generator()
console.log('Starting iteration')
console.log(iterator.next()) // {value: 0, done: false}. Function resume
console.log(iterator.next()) // {value: 1, done: false}. Function resume
console.log(iterator.next()) // {value: undefined, done: true} 

/**
 * Output:
    Starting iteration
    Execution started
    { value: 0, done: false }
    Execution resumed
    { value: 1, done: false }
    Execution resumed
    { value: undefined, done: true }
 */
