interface BasicAddress {
    name?: string,
    street: string,
    city: string,
    country: string,
    portalCode: string
}

interface AddressWithUnit extends BasicAddress {
    unit: string
}

//////////////////////////////////////////////////////////
interface Colorful {
    color: string
}
interface Circle1 {
    radius: number
}
interface ColorfulCircle extends Colorful, Circle1 { }

const cc: ColorfulCircle = {
    color: 'red',
    radius: 42,
}