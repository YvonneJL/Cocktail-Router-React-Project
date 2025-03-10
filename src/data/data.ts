export interface IAlcoholCategory {
    name: string,
    desc: string,
    backgroundColor: string
    linkTo: string
  }

 

export const allAlcCategories: IAlcoholCategory[] = [
    {
        name: "Gin",
        desc: "Lorem ipsum schmipsum",
        backgroundColor: "bg-cocktail-blue",
        linkTo: "/gin"
    },
    {
        name: "Vodka",
        desc: "Lorem ipsum schmipsum",
        backgroundColor: "bg-cocktail-purple",
        linkTo: "/vodka"
    },
    {
        name: "Rum",
        desc: "Lorem ipsum schmipsum",
        backgroundColor: "bg-cocktail-red",
        linkTo: "/rum"
    },
    {
        name: "Scotch",
        desc: "Lorem ipsum schmipsum",
        backgroundColor: "bg-cocktail-orange",
        linkTo: "/scotch"
    },
    {
        name: "Alkoholfrei",
        desc: "Lorem ipsum schmipsum",
        backgroundColor: "bg-cocktail-blue-purple",
        linkTo: "/alkoholfrei"
    },
    {
        name: "Zufall",
        desc: "Lorem ipsum schmipsum",
        backgroundColor: "bg-cocktail-green",
        linkTo: "/zufall"
    },
  ]