import React, { use, useEffect, useState } from "react";
import DrinkStack from "../DrinkStack/DrinkStack";
import {
  DrinkType, glasses,
  allingredients, IngredientsWithAmount, accessories,
  AccessoryWithPosition, garnishings
} from "../../lib/mockdata";
import Glass from "../Glass";
import Accessory from "../Accessory";
import Garnishing from "../Garnishing";

interface DrinkMakerProps {
  drink: DrinkType;
}

const getData = (drink: DrinkType) => {
  if (!drink) return null;

  const glassId = drink.glass;
  const glass = glasses.find((g) => g.id === glassId);
  if (!glass) return null;

  const accessoryId = drink.accessory?.id;
  let accessory;
  if (accessoryId) {
    accessory = accessories.find((a) => a.id === accessoryId);
    accessory = accessory
      ? { ...accessory, ...drink.accessory } as AccessoryWithPosition
      : null;
  }

  const garnishingId = drink.garnishing;
  const garnishing = garnishings.find((g) => g.id === garnishingId);

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

  return {
    drink, glass, accessory, garnishing,
    ingredients: filteredIngredients
  };
}

const DrinkMaker = (props: DrinkMakerProps) => {
  const { drink } = props;
  const { glass, accessory, garnishing, ingredients } = getData(drink) || {};

  return (
    // <div className="w-auto relative max-w-[250px]">
    <div className="w-auto relative drinkmaker"
      style={{
        maxWidth: 'min(250px,18dvh)',
      }}
    >
      {ingredients && glass &&
        <>
          <DrinkStack
            ingredients={ingredients}
            glass={glass} />
        </>
      }
      {accessory && <Accessory {...accessory} />}
      {glass && <Glass {...glass} />}
      {garnishing && <Garnishing {...garnishing} />}

    </div >
  )
};

export default DrinkMaker;
