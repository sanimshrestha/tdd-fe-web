'use client';
import { drinkSchemaOutput } from "@server/schema/drink.schema";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Skeleton } from "./ui/skeleton";
import { useAppSelector } from "@/redux/hooks";
import { uiState } from "@/redux/features/ui";


const IngredientFooter = ({ drink }: { drink?: drinkSchemaOutput }) => {
  const [selectedAmtUnitIdx, setamtUnitIdx] = useState<number>(0);
  const hoveredIngredient = useAppSelector<uiState['hoveredIngredient']>
    ((state) => state.ui.hoveredIngredient);


  const adjustedIngredients = drink
    ? drink.ingredients?.map((ingredient) => {
      return {
        ...ingredient,
        amount: [ingredient.parts, ...ingredient.amount || []],
        unit: [ingredient.parts > 1
          ? ingredient.ingredientStyle.units
          : ingredient.ingredientStyle.unit,
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
                        m-4 lg:self-start lg:mx-8 lg:mt-10 gap-4 w-fit"
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
          <h3 className="font-bold text-muted-foreground text-sm 
                  leading-4 mb-2 text-center">
            {drink.method?.name || drink.customMethod || ''}
          </h3>
          <ul className="w-full flex flex-wrap justify-center 
                          text-foreground gap-4"
            onClick={changeIngredientUnit}>
            {drink && adjustedIngredients?.map((ingredient, index) => (
              <li key={index}
                className={`flex flex-col text-center 
                  basis-1/3-pad-2 grow-0 shrink-0 transition-transform
                  ease-in-out duration-200
                  ${(hoveredIngredient === ingredient.name)
                    ? 'scale-110 textShadow-glow'
                    : 'scale-100'}`}>
                <AnimatePresence>
                  <div className="flex flex-col items-center justify-end">
                    {ingredient.amount && <motion.span
                      className="text-3xl leading-8 font-normal 
                                mb-1 select-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {ingredient.amount[selectedAmtUnitIdx] || ""}
                    </motion.span>}
                    {ingredient.unit && <motion.span
                      className="text-sm text-muted-foreground
                              font-light mb-1 select-none textShadow-none"
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
          {drink.garnishingInstructions?.map((instruction, index) => (
            <h3 key={index} className="font-bold text-muted-foreground text-sm 
                  leading-4 mt-2 text-center">
              {instruction}
            </h3>
          )
          )}
        </>}
    </section>
  );
};

export default IngredientFooter;
