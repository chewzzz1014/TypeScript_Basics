// turn these into enums

// const beforeLoad = 'beforeLoad'
// const loading = 'loading'
// const afterLoad = 'afterLoad'

enum LoadingState {
    beforeLoad = 'beforeLoad',
    loading = 'loading',
    afterLoad = 'afterLoad'
}

const isLoading = (state: LoadingState) => state === LoadingState.loading

console.log(isLoading(LoadingState.beforeLoad))