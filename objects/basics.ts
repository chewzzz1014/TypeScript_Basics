// direct, interface and type alias to represent object type


// 1
function greet1(person: { name: string, age: number }) {
    return `Hello ${person.name}`
}

// 2
interface PersonInterface {
    name: string;
    age: number;
}
function greet2(person: PersonInterface) {
    return `Hello ${person.name}`
}

// 3
type PersonType = {
    name: string,
    age: number
}
function greet3(person: PersonType) {
    return `Hello ${person.name}`
}