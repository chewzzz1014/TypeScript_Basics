// class

class Employee {
    #id: number; // private

    name: string

    address: string

    constructor(id: number, name: string, address: string) {
        this.address = address
        this.name = name
        this.#id = id
    }

    getNameWithAddress(): string {
        return `${this.name} ${this.address}`
    }
}

let emp = new Employee(3, 'chewzzz', 'Malaysia')

console.log(emp)
console.log(emp.getNameWithAddress())
// error! id is private
// console.log(emp.id)

