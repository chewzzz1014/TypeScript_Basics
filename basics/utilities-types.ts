// Partial<Type> will construct a type with all properties of Type set to optional

interface MyUser {
    name: string;
    id: string;
    email?: string;
}

// all fields are optional, use Partial instead
/*
interface MyUserOptionals {
    name?: string;
    id?: string;
    email?: string;
}
*/

// every fields of MyUser are optional now
type MyUserOptionals = Partial<MyUser>

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
    return {
        ...user,
        ...overrides
    }
}

console.log(merge({
    name: 'chewzzz',
    id: '22222222',
    email: 'qww@zzz.com'
}, {
    email: 'newemail@edu.com'
}))



/////////////////////////////////////////////////////////////////

// Required<Type> will construct a type with all properties of Type set to required
type RequiredMyUser = Required<MyUser>


/////////////////////////////////////////////////////////////////

// Pick<Type, Keys> will  construct a type by [icking the set of properties from Type

type JustEmailAndName = Pick<MyUser, 'name' | 'email'>

const mapById = (users: MyUser[]): Record<string, MyUser> => {
    return users.reduce((a, v) => {
        return {
            ...a,
            [v.id]: v
        }
    }, {})
}

console.log(mapById([
    {
        id: '122333',
        name: 'chewzzzz',
    },
    {
        id: '3340432',
        name: 'qowkwowowo',
    },
    {
        id: '039494494',
        name: 'jkjkjkjkjk',
    }
]))


/////////////////////////////////////////////////////////////////

// Omit<Type, Keys> will construct a type by picking all properties from Type and then removing Keys
// Opposite of Pick
type UserWithoutId = Omit<MyUser, 'id'>


const mapByIdOmitId = (users: MyUser[]): Record<string, UserWithoutId> => {
    return users.reduce((a, v) => {
        const { id, ...other } = v
        return {
            ...a,
            [id]: other
        }
    }, {})
}

console.log(mapByIdOmitId([
    {
        id: '122333',
        name: 'chewzzzz',
    },
    {
        id: '3340432',
        name: 'qowkwowowo',
    },
    {
        id: '039494494',
        name: 'jkjkjkjkjk',
    }
]))








