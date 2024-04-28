import { drinkSchemaOutput } from "@/app/_server/schema/drink.schema";

const defaultGlassPadding = 25
export const getIngredientHeightByVolume = (
            glass: drinkSchemaOutput["glass"], 
            ingredients: drinkSchemaOutput["ingredients"] ) => {
    const totalIngredientParts = ingredients.reduce((acc, curr) => {
        return acc + curr.parts;
      }, 0);

    switch (glass.name.toLowerCase()) {
        case 'martini':
            const martini = new Linear(0,0,267,248)
            return getIngredientWithHeights(
                        ingredients, glass, martini)
        case 'collins':
        case 'coupe':
        case 'rocks':
        case 'hurricane':
        default:
            return ingredients.map((ingredient) => {
                return {
                  ...ingredient,
                  height: (ingredient.parts / totalIngredientParts)
                    * (100 - (glass.drinkPaddingPercent ?? defaultGlassPadding))
                }
              });
      }
}

class Linear {
    x1: number
    x2: number
    y1: number
    y2: number
    slope: number
    //Assumes c is 0 always
    constructor(x1 = 0,y1 = 0, x2 = 267,  y2 = 248) {
        this.x1 = x1
        this.y1 = y1
        this.x2 = x2
        this.y2 = y2
        this.slope = (y2-y1)/(x2-x1)
    }
    curve(x:number) {
        return this.slope*x
    }
    areaUnderCurveFn(x:number) {
        return this.slope*(x**2)/2
    }
    areaUnderCurveInv(area:number) {
        return Math.sqrt((2*area) / this.slope)
    }
}

const getIngredientWithHeights = 
    (ingredients: drinkSchemaOutput["ingredients"], 
    glass:drinkSchemaOutput["glass"], curveFn:Linear) => {
    const {drinkPaddingPercent = defaultGlassPadding} = glass
    const x2_adj = (100-drinkPaddingPercent)/100 * curveFn.x2
    const totalArea = curveFn.areaUnderCurveFn(x2_adj) -
                        curveFn.areaUnderCurveFn(curveFn.x1)
    const totalParts = ingredients.reduce((acc, curr) => {
        return acc + curr.parts;
      }, 0);
    let areaStops: number[] = []
    for (let i = ingredients.length - 1; i >= 0; i--) {
        const parts = ingredients[i].parts;
        areaStops.push((parts/totalParts) * totalArea
                        + (areaStops.length?areaStops[areaStops.length-1]: 0))
    }
    let heights:number[] = []
    for (let i = 0; i < areaStops.length; i++) {
        heights.push(curveFn.areaUnderCurveInv(areaStops[i]) * 100/curveFn.x2)
    }
    heights = heights
                .map((height, i) => height - (i>0 ? heights[i-1] : 0))
                .reverse()

    return ingredients.map((ingredient, i) => {
        return {...ingredient, height: heights[i]}
    })
}

// class BezierCurve {
//     x1: number
//     x2: number
//     y1: number
//     y2: number
//     x3: number
//     y3: number
//     x4: number
//     y4: number
//     constructor(x1 = 0, y1 = 0, x2 = 0, y2 = 247, 
//                 x3 = 478.5, y3 = -1, x4 = 588, y4 = 122) {
//         this.x1 = x1
//         this.y1 = y1
//         this.x2 = x2
//         this.y2 = y2
//         this.x3 = x3
//         this.y3 = y3
//         this.x4 = x4
//         this.y4 = y4
//     }
//     curve(t:number) {
//         const x =
//             Math.pow(1 - t, 3) * this.x1 +
//             3 * Math.pow(1 - t, 2) * t * this.x2 +
//             3 * (1 - t) * Math.pow(t, 2) * this.x3 +
//             Math.pow(t, 3) * this.x4;
//         const y =
//             Math.pow(1 - t, 3) * this.y1 +
//             3 * Math.pow(1 - t, 2) * t * this.y2 +
//             3 * (1 - t) * Math.pow(t, 2) * this.y3 +
//             Math.pow(t, 3) * this.y4;
//     }
//     areaUnderCurveFn(x:number) {
//         return this.slope*(x**2)/2
//     }
//     areaUnderCurveInv(area:number) {
//         return Math.sqrt((2*area) / this.slope)
//     }
// }