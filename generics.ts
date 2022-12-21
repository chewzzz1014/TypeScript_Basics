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


// inferred generics
const [numGetter, numSetter] = simpleReactState(3)
const [stateGetter, stateSetter] = simpleReactState('yoyoyyo')

// overide onferred generics
const [state1Getter, state1Setter] = simpleReactState<string | null>(null)
console.log(`State 1: ${state1Getter()}`)
// only accepys null
state1Setter('hello')
console.log(`State 1: ${state1Getter()}`)



/////////////////////////////////////////////////////////////////////////////////////////////////
interface Rank<RankItem> {
    item: RankItem,
    rank: number
}

function ranker<RankItem>(
    items: RankItem[],
    rank: (v: RankItem) => number
): RankItem[] {
    const ranks: Rank<RankItem>[] = items.map(item => {
        return {
            item,
            rank: rank(item)
        }
    })

    // sort ascendingly
    ranks.sort((a, b) => a.rank - b.rank)

    // return item of ranls only
    return ranks.map((rank) => rank.item)
}


//////////////////////////////////////////////////////////////////////////////////////////

// calling 'ranker'function with Pokemon type

interface Pokemon {
    name: string,
    hp: number
}

const pokemon: Pokemon[] = [
    {
        name: 'zzzzz',
        hp: 20
    },
    {
        name: 'xxxxx',
        hp: 33
    }
]

const ranks = ranker(pokemon, ({ hp }) => hp)
console.log(ranks)

