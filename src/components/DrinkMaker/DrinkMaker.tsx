import React, { use, useEffect, useState } from "react";
import DrinkStack from "../DrinkStack/DrinkStack";
import {
  DrinkType, GlassType, drinks, glasses,
  allingredients, IngredientsWithAmount
} from "./../../utils/mockdata";
import Glass from "../Glass";

interface DrinkMakerProps {
  drink: DrinkType;
}

const getData = (drink: DrinkType) => {
  if (!drink) return null;

  const glassId = drink.glass;
  const glass = glasses.find((g) => g.id === glassId);
  if (!glass) return null;

  const ingredientsTemp = drink.ingredients;
  if (!ingredientsTemp) return null;

  const ingredients = ingredientsTemp.map((i) => {
    const ingredient = allingredients.find((i_dash) => i_dash.id === i.id);
    return ingredient
      ? { ...ingredient, amount: i.amount, unit: i.unit }
      : null;
  });

  const filteredIngredients = ingredients
    .filter(Boolean) as IngredientsWithAmount[];

  return { drink, glass, ingredients: filteredIngredients };
}

const DrinkMaker = (props: DrinkMakerProps) => {
  const { drink } = props;
  const { glass, ingredients } = getData(drink) || {};

  return (
    <div className="w-auto relative max-w-[250px]">
      {ingredients && glass &&
        <>
          <DrinkStack
            ingredients={ingredients}
            glass={glass} />
        </>
      }
      {glass && <Glass {...glass} />}
    </div>
  )
};

export default DrinkMaker;
