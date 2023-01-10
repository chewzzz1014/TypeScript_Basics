// specific string or number as type

// type of changingString is string since its value can be changes
let changingString = "Hello World";
changingString = "Olá Mundo";

// tpye of constantString is Hello World bcs it can only represent a literal type representation
const constantString = "Hello World";

// example

function catMotion(catName: string, movement: 'left' | 'right' | 'up' | 'down') {
    console.log(`Cat ${catName} moves ${movement.toUpperCase()}`)
}
catMotion('cjb', 'down')
// error, should be down
// catMotion('cjb', 'Down')

function compareTo(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1
}