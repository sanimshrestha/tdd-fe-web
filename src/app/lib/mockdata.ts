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
  category: string;
  method: string;
  glass: number;
  accessory?: {
    id: number;
    top: string;
    left: string;
  };
  garnishing?: number;
  ingredientUnitAmt: number;
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
  padding: number;
}

export type AccessoryType = {
  id: number;
  name: string;
  slug: string;
  strokeColor: string;
  strokeWidth: number;
  fill: string;
}

export type AccessoryWithPosition = AccessoryType 
                                    & { top: string, left: string };

export type GarnishingType = {
  id: number;
  name: string;
  slug: string;
  strokeColor: string;
  strokeWidth: number;
  fill: string;
}
                                    
// export type AccessoryWithPosition = AccessoryType 
//                                       & { top: string, left: string };



export const drinks:DrinkType[] = [
  {
    id: 1,
    name: "Yellow Bird",
    slug: "yellow-bird",
    category: "New Era - Blueprint",
    method: "Shake & Strain",
    glass:  1,
    ingredientUnitAmt: 15,
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
  },
  {
    id: 2,
    name: "Whiskey Sour",
    slug: "whiskey-sour",
    category: "Classic - Blueprint",
    method: "Shake & Strain",
    glass:  1,
    ingredientUnitAmt: 15,
    ingredients: [
      {
        id: 5,
        amount: 45,
        unit: "ml"
      },
      {
        id: 6,
        amount: 30,
        unit: "ml"
      },
      {
        id: 7,
        amount: 15,
        unit: "ml"
      }
    ],
  },
  {
    id: 3,
    name: "Pina Colada",
    slug: "pina-colada",
    category: "Contemporary Classic - Blueprint",
    method: "Blend",
    glass:  2,
    accessory: {
      id: 1,
      top: "-23.1%",
      left: "-21%",
    },
    garnishing: 1,
    ingredientUnitAmt: 15,
    ingredients: [
      {
        id: 9,
        amount: 45,
        unit: "ml"
      },

      {
        id: 1,
        amount: 15,
        unit: "ml"
      },
      {
        id: 8,
        amount: 15,
        unit: "ml"
      }
    ],
  }
]

export const glasses:GlassType[] = [
  {
    id: 1,
    name: "Cocktail",
    slug: "cocktail",
    strokeColor: "#fff",
    strokeWidth: 2,
    gap: 2,
    maskRatio: 42.69,
    padding: 25
  },
  {
    id: 2,
    name: "Colada",
    slug: "colada",
    strokeColor: "#fff",
    strokeWidth: 2,
    gap: 2,
    // maskRatio: 83.24,
    maskRatio: 81.05,
    padding: 10.5
  }
]
export const accessories:AccessoryType[] = [
  {
    id: 1,
    name: "Straw",
    slug: "straw",
    strokeColor: "#fff",
    strokeWidth: 8,
    fill: "none"
  }
]

export const allingredients:IngredientType[] = [
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
  },
  {
    id: 5,
    name: "Bourbon Whiskey",
    slug: "bourbon-whiskey",
    color: "#B26A09",
  },
  {
    id: 6,
    name: "Fresh Lemon Juice",
    slug: "fresh-lemon-juice",
    color: "#FFD800",
  },
  {
    id: 7,
    name: "Sugar Syrup",
    slug: "sugar-syrup",
    color: "#C98803",
  },
  {
    id: 8,
    name: "Coconut Milk",
    slug: "coconut-milk",
    color: "#FFF1A7",
  },
  {
    id: 9,
    name: "Pineapple Juice",
    slug: "pineapple-juice",
    color: "#DCB85B",
  }
]
export const garnishings:GarnishingType[] = [
  {
    id: 1,
    name: "Pineapple Wedge",
    slug: "pineapple-wedge",
    strokeColor: "#DCB85B",
    strokeWidth: 1,
    fill: "#DCB85B"
  }
]
