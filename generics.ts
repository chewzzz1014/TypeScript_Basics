// generic in typescript

function simpleReactState<T>(initial: T): [() => T, (v: T) => void] {
    let str: T = initial
    return [
        () => str,
        (v: T) => {
            str = v
        }
    ]
}


// generic can be any type
const [numGetter, numSetter] = simpleReactState(3)
const [stateGetter, stateSetter] = simpleReactState('yoyoyyo')


