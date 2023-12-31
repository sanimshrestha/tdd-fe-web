import { DrinkType, GlassType, IngredientsWithAmount } from "@/utils/mockdata";
import React from "react";

interface DrinkStackProps {
  ingredients: IngredientsWithAmount[];
  glass: GlassType
}

const DrinkStack = (props: DrinkStackProps) => {
  const { ingredients, glass } = props;
  return (
    <div
      className="absolute top-0 flex flex-col-reverse gap-1 w-full h-full"
      style={{
        clipPath: "url(#mask)",
        height: `calc(${glass.maskRatio}% - 
                    ${2 * (glass.gap + glass.strokeWidth)}px)`,
        width: `calc(100% - ${2 * (glass.gap + glass.strokeWidth)}px)`,
        left: `${2 * glass.strokeWidth}px`,
        top: `${2 * glass.strokeWidth}px`
      }} >
      {ingredients.map((ingredient) => (
        <div
          key={ingredient.id}
          style={{
            height: ingredient.amount + "%",
            backgroundColor: ingredient.color,
          }}
          title={ingredient.name}>
        </div >
      ))
      }
    </div>
  );
};

export default DrinkStack;
