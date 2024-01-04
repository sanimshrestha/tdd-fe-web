'use client';
import { DrinkType, IngredientsWithAmount } from "@/utils/mockdata";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const AMT_UNITS = {
  ABSOLUTE: 'absolute',
  RELATIVE: 'relative',
}
type AmountUnit = typeof AMT_UNITS[keyof typeof AMT_UNITS];

const IngredientFooter = ({ ingredients, drink }:
  { ingredients?: IngredientsWithAmount[], drink?: DrinkType }) => {
  const [amtUnit, setamtUnit] = useState<AmountUnit>(AMT_UNITS.RELATIVE);


  const changeIngredientUnit = () => {
    setamtUnit((prevUnit) => prevUnit === AMT_UNITS.RELATIVE
      ? AMT_UNITS.ABSOLUTE
      : AMT_UNITS.RELATIVE);
  }

  return (
    <section className="flex flex-col justify-center items-center gap-6 p-2">
      <h3 className="font-bold text-primary text-sm 
                  leading-4 tracking-tighter uppercase">
        {drink?.method}
      </h3>
      <ul className="flex text-primary gap-4" onClick={changeIngredientUnit}>
        {drink && ingredients?.map((ingredient, index) => (
          <li key={index} className="flex flex-col text-center">
            <AnimatePresence>
              {(amtUnit === AMT_UNITS.ABSOLUTE)
                ? <div className="flex items-baseline">
                  <motion.span
                    className="text-2xl leading-8 font-light mb-1 select-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {ingredient.amount}
                  </motion.span>
                  <motion.span
                    className="text-sm font-light  mb-1 select-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {ingredient.unit}
                  </motion.span>
                </div>

                : <motion.span
                  className="text-3xl leading-8 font-light mb-1 select-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {ingredient.amount / drink.ingredientUnitAmt}
                </motion.span>
              }
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
