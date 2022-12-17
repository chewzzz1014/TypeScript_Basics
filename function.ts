// specifying the return type
function addNumbers(a: number, b: number): number {
    return a + b;
}

// ts dont have module.exports
// module.exports = addNumbers;

export default addNumbers 