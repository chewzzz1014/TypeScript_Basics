// function as parameter

// function type expression
function greeter(fn: (s: string) => void) {
    fn('Hello~~')
}

function printToConsole(s: string) {
    console.log(s)
}

greeter(printToConsole)

// function as type 
type GreetFunction = (s: string) => void
function greeterType(fn: GreetFunction) {

}