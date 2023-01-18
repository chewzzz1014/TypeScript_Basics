// class

class Employee {
    #id: number; // private

    protected name: string // protected: only available within the class and child class

    address: string

    constructor(id: number, name: string, address: string) {
        this.address = address
        this.name = name
        this.#id = id
    }

    // static method
    static getEmployeeCount(): number {
        return 50
    }

    getNameWithAddress(): string {
        return `${this.name} is staff at ${this.address}`
    }
}

class Manager extends Employee {
    constructor(id: number, name: string, address: string) {
        super(id, name, address)
    }

    getNameWithAddress(): string {
        return `${this.name} is manager at ${this.address}`
    }
}

let emp = new Employee(3, 'chewzzz', 'Malaysia')

console.log(`There are ${Employee.getEmployeeCount()} employees\n`)
console.log(emp)
console.log(emp.getNameWithAddress())
// error! id is private
// console.log(emp.id)

let myManager = new Manager(5, 'wwwww', 'Malaysia')
console.log(myManager.getNameWithAddress())