'use client';
import { drinkSchemaOutput } from "@server/schema/drink.schema";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";


const IngredientFooter = ({ drink }: { drink: drinkSchemaOutput }) => {
  const { ingredients } = drink;
  const [selectedAmtUnitIdx, setamtUnitIdx] = useState<number>(0);

  const adjustedIngredients = ingredients?.map((ingredient) => {
    return {
      ...ingredient,
      amount: [ingredient.parts, ...ingredient.amount || []],
      unit: ["", ...ingredient.unit || []],
    };
  });

  const numIngredientUnits = adjustedIngredients[0].unit.length;

  const changeIngredientUnit = () => {
    setamtUnitIdx(selectedAmtUnitIdx =>
      selectedAmtUnitIdx === numIngredientUnits - 1
        ? 0
        : (selectedAmtUnitIdx + 1));
  }

  return (
    <section className="flex flex-col justify-center items-center gap-4 p-2">
      <h3 className="font-bold text-foreground text-sm 
                  leading-4 tracking-tighter uppercase">
        {drink.method?.name}
      </h3>
      <ul className="flex text-foreground gap-4" onClick={changeIngredientUnit}>
        {drink && adjustedIngredients?.map((ingredient, index) => (
          <li key={index} className="flex flex-col text-center">
            <AnimatePresence>
              <div className="flex items-baseline justify-center">
                {ingredient.amount && <motion.span
                  className="text-2xl leading-8 font-light mb-1 select-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {ingredient.amount[selectedAmtUnitIdx] || ""}
                </motion.span>}
                {ingredient.unit && <motion.span
                  className="text-sm font-light  mb-1 select-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {ingredient.unit[selectedAmtUnitIdx] || ""}
                </motion.span>}
              </div>
            </AnimatePresence>
            {ingredient.name.trim().split(' ').map((word, index) =>
              <span key={index} className="text-sm leading-4">
                {word}
              </span>
            )}
          </li>
        ))}
      </ul>

    </section>
  );
};

export default IngredientFooter;
