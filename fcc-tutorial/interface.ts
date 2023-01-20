// interface in ts

interface Address {
    street: string,
    city: string,
    state: string,
    pin?: string
}

interface User {
    name: string,
    age: number,
    id: number,
    email: string,
    address: Address
}


function printAddressInfo(add: Address) {
    console.log(`Street: ${add.street}\nCity: ${add.city}\nState: ${add.state}\n${add.pin ? `PIN: ${add.pin}` : ''}`)
}

let user: User = {
    name: 'chewzzz',
    age: 20,
    id: 222222,
    email: 'z@edu.my',
    address: {
        street: 'Rainbow Road',
        city: 'Kuala Lumpur',
        state: 'WP KL',
    }
}

printAddressInfo(user.address)

const add: Address = {
    street: 'Tailwind Road',
    city: 'Mertajam',
    state: 'Penang'
}

// array destructing
let [user1, user2, user3]: User[] = [
    { name: 'chewzzz', age: 20, id: 1, email: 'z@email.com', address: add },
    { name: 'xxxxxxx', age: 30, id: 2, email: 'x@email.com', address: add },
    { name: 'yyyyyy', age: 40, id: 3, email: 'y@email.com', address: add },
]