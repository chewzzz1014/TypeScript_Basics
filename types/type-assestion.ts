// type assestion
// to specify a more specify type
// only allow type assestion which converts to a more specific or less specific version of type (prevent impossible coercions like string -> hello)

const myCanvas = document.getElementById('main') as HTMLCanvasElement


const a = (expr as any) as T

