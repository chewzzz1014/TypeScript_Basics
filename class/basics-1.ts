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
