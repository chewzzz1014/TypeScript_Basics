type MyFlexibleDogInfo = {
    name: string;
    [key: string]: string | number;
};

const dog: MyFlexibleDogInfo = {
    name: 'LG',
    breed: 'Mutt',
    age: 22
}

interface DogInfo {
    name: string,
    age: number
}

type OptionFlags<Type> = {
    [Property in keyof Type]: boolean;
}

type DogInfoOptions = OptionFlags<DogInfo>

type Listeners<Type> = {
    [Property in keyof Type]: (newValue: Type[Property]) => void
}

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
    throw 'Need to be implemented';
}

const lg: DogInfo = {
    name: 'LG',
    age: 3
}

type DogInfoListeners = Listeners<DogInfo>

listenToObject(lg, {
    onNameChange: (v: string) => { },
    onAgeChange: (v: number) => { }
})



