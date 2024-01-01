export type IngredientType = {
  id: number;
  name: string;
  slug: string;
  color: string;
}

export type IngredientsWithAmount = IngredientType 
                                    & { amount: number, unit: string };


export type DrinkType = {
  id: number;
  name: string;
  slug: string;
  glass: number;
  ingredients: {id: number, 
                amount: number;
                unit: string;}[];
}

export type GlassType = {
  id: number;
  name: string;
  slug: string;
  strokeColor: string;
  strokeWidth: number;
  gap: number;
  maskRatio: number;
}


export const drinks = [
  {
    id: 1,
    name: "Yellow Bird",
    slug: "yellow-bird",
    glass:  1,
    ingredients: [
      {
        id: 1,
        amount: 30,
        unit: "ml"
      },
      {
        id: 2,
        amount: 15,
        unit: "ml"
      },
      {
        id: 3,
        amount: 15,
        unit: "ml"
      },
      {
        id: 4,
        amount: 15,
        unit: "ml"
      }
    ],
  }
]

export const glasses = [
  {
    id: 1,
    name: "Cocktail",
    slug: "cocktail",
    strokeColor: "#fff",
    strokeWidth: 2,
    gap: 2,
    maskRatio: 42.69
  }
]

export const allingredients = [
  {
    id: 1,
    name: "White Rum",
    slug: "white-rum",
    color: "#F2F2F2",
  },
  {
    id: 2,
    name: "Galliano",
    slug: "galliano",
    color: "#E9DD00",
  },
  {
    id: 3,
    name: "Triple Sec",
    slug: "triple-sec",
    color: "#E4F3FC",
  },
  {
    id: 4,
    name: "Lime Juice",
    slug: "lime-juice",
    color: "#AEC90D",
  }
]