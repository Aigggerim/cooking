export interface IRecipe {
    id: number,
    mainImage: string,
    title: string,
    description: string,
    author: {
        id: number,
        name: string
    },
    ingredients: string,
    steps: string,
}