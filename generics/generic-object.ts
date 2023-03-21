// generic interface and type alias
interface BoxInterface<T> {
    contents: T;
}

type BoxAlias<T> = {
    contents: T
}

// generic function
function setContents<T>(box: BoxInterface<T>, newContents: T) {
    box.contents = newContents
}

// Array itself is a generic type
interface Array<T> {
    length: number;
    pop(): T | undefined;
    push(...items: T[]): number;
}


// Read Only Array
// can't modify item in the array 
const roArr: ReadonlyArray<string> = ['red', 'green', 'blue']
const roArr1: readonly string[] = [] // same as ReadonlyArray
