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