// optionals in typescript

// optional parameter
function printIngredients(quantity: string, ingredient: string, extra?: string) {
    console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : ''}`)
}

printIngredients('1C', 'Onion Ring')
printIngredients('1C', 'Pizza', 'Extra Cheese')


// optional field
interface User {
    id: string,
    info?: {
        email?: string
    }
}

// problem! we're not sure whether email exists
function getEmail(user: User): string {
    if (user.info) {
        return user.info.email
    }
    return ''
}

// optional chaining
function getEmailEasy(user: User): string {
    return user?.info?.email ?? ''
}