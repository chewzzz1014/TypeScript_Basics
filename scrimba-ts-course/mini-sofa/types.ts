export interface Review {
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string;
}

export interface UserName {
    firstName: string;
    lastName: string
}

export interface MyInfo {
    userName: UserName;
    isReturning: boolean;
    age: number;
    stayedAt: string[];
}

export interface Location {
    firstLine: string;
    city: string;
    code: number;
    country: string;
}

export interface Properties {
    image: string;
    title: string;
    price: number;
    location: Location;
    contact: string;
    isAvailable: boolean;
}