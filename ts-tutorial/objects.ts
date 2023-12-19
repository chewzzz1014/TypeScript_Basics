class Counter {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    }
}

class Person {
    _ssn: string;
    _firstName: string;
    _lastName: string;
    _age: number;
    readonly _birthDate: Date;

    constructor(ssn: string, firstName: string, lastName: string, birthDate: Date, age: number) {
        this._ssn = ssn;
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthDate = birthDate;
        this._age = age
    }

    public get age() {
        return this._age
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}