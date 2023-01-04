// turn these into enums

// const beforeLoad = 'beforeLoad'
// const loading = 'loading'
// const afterLoad = 'afterLoad'

enum LoadingState {
    beforeLoad = 'beforeLoad',
    loading = 'loading',
    afterLoad = 'afterLoad'
}

const englishLoadingStates = {
    [LoadingState.beforeLoad]: 'Before Load'
}

const isLoading = (state: LoadingState) => state === LoadingState.loading

console.log(isLoading(LoadingState.beforeLoad))



//////////////////////////////////////////////////////////

// literal types 

// dice value can only either be 1, 2, 3
function rollDice(dice: 1 | 2 | 3): number {
    let pip = 0

    for (let i = 0; i < dice; i++) {
        pip += Math.floor((Math.random() * 5)) + 1
    }
    return pip
}

console.log(rollDice(3))


function sendEvent(name: 'addToCart', data: { productId: number; }): void
function sendEvent(name: 'checkout', data: { cartCount: number; }): void
function sendEvent(name: string, data: unknown): void {
    console.log(`${name}: ${JSON.stringify(data)}`)
}

sendEvent('addToCart', { productId: 212222 })