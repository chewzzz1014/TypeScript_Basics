// !, visibility modifier
class Coder {

    // definite assignment assertion
    secondLang!: string

    constructor(
        // visibility modifier
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'TypeScript' // default value
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `Hello, I'm ${this.age} years old.`
    }
}

const me = new Coder('chewzzz', 'JPOP', 21, 'TypeScript')
console.log(me.getAge())


// inheritance
class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ) {
        super(name, music, age)
        this.computer = computer
    }

    // property 'lang' is protected in parent child so we can acces it from child class
    public getLang() {
        return `I write ${this.lang}`
    }
}

const you = new WebDev('Windows', 'zzzz', 'Rock', 22)
console.log(you.getLang())

//////////////////////////////////////////////////////////////

// interface
interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    name: string
    instrument: string

    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}.`
    }
}

const pagg = new Guitarist('ttttt', 'guitar')
console.log(pagg.play('strums'))


//////////////////////////////////////////////////////////////

// static class members
class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John')
const John1 = new Peeps('John1')
const John2 = new Peeps('John2')
console.log(`Current count is ${Peeps.getCount()}`)
