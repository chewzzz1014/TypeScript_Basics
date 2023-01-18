// class

class Employee {
    id: number;

    name: string

    address: string

    constructor(id: number, name: string, address: string) {
        this.address = address
        this.name = name
        this.id = id
    }
}

let emp = new Employee(3, 'chewzzz', 'Malaysia')

console.log(emp)

