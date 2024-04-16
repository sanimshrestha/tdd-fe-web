'use client';
import { drinkSchemaOutput } from "@server/schema/drink.schema";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Skeleton } from "./ui/skeleton";


const IngredientFooter = ({ drink }: { drink?: drinkSchemaOutput }) => {
  const [selectedAmtUnitIdx, setamtUnitIdx] = useState<number>(0);

  const adjustedIngredients = drink
    ? drink.ingredients?.map((ingredient) => {
      return {
        ...ingredient,
        amount: [ingredient.parts, ...ingredient.amount || []],
        unit: [ingredient.parts > 1 ? "parts" : "part",
        ...ingredient.unit || []],
      };
    })
    : [];


  const changeIngredientUnit = () => {
    const numIngredientUnits = adjustedIngredients[0].unit.length;
    setamtUnitIdx(selectedAmtUnitIdx =>
      selectedAmtUnitIdx === numIngredientUnits - 1
        ? 0
        : (selectedAmtUnitIdx + 1));
  }

  return (
    <section className="flex flex-col justify-center items-center z-10 
                        m-4 lg:self-start lg:mx-8 lg:mt-16 gap-4 w-fit"
      style={{
        gridArea: "ingredients",
      }} >
      {!drink
        ? (<div className="flex flex-col gap-4 p-2 items-center">
          <Skeleton className="h-7 w-36" />
          <div className="flex gap-4">
            <Skeleton className="h-20 w-24 basis-1/3-pad-2" />
            <Skeleton className="h-20 w-24 basis-1/3-pad-2" />
            <Skeleton className="h-20 w-24 basis-1/3-pad-2" />
          </div>
        </div>)
        : <>
          <h3 className="font-bold text-foreground text-sm 
                  leading-4 tracking-tighter uppercase">
            {drink.method?.name}
          </h3>
          <ul className="flex flex-wrap justify-center text-foreground gap-4"
            onClick={changeIngredientUnit}>
            {drink && adjustedIngredients?.map((ingredient, index) => (
              <li key={index} className="flex flex-col text-center 
                                          basis-1/3-pad-2 grow-0 shrink-0">
                <AnimatePresence>
                  <div className="flex flex-col items-center justify-end">
                    {ingredient.amount && <motion.span
                      className="text-2xl leading-8 font-light mb-1 select-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {ingredient.amount[selectedAmtUnitIdx] || ""}
                    </motion.span>}
                    {ingredient.unit && <motion.span
                      className="text-sm text-muted-foreground
                              font-light mb-1 select-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {ingredient.unit[selectedAmtUnitIdx] || ""}
                    </motion.span>}
                  </div>
                </AnimatePresence>
                <span>
                  {ingredient.name}
                </span>
              </li>
            ))}
          </ul>
        </>}
    </section>
  );
};

export default IngredientFooter;
