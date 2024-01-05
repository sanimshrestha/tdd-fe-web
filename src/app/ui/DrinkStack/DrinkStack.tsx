'use client';
import { GlassType, IngredientsWithAmount } from "@/app/lib/mockdata";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface DrinkStackProps {
  ingredients: IngredientsWithAmount[];
  glass: GlassType
}

const DrinkStack = (props: DrinkStackProps) => {
  const { ingredients, glass } = props;

  const totalIngredientAmt = ingredients.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  const adjustedIngredients = ingredients.map((ingredient) => {
    return {
      ...ingredient,
      amount: (ingredient.amount / totalIngredientAmt) * (100 - glass.padding)
    }
  });

  // Framer motion variants for the drinks stack
  const container = {
    hidden: {
      clipPath: 'inset(100% 0 0 0)'
    },
    show: {
      clipPath: 'inset(0 0 0 0)',
      transition: {
        ease: "easeInOut",
        duration: 0.5
      },
    },
  };

  const getStack = (isBackground = false) => {
    return (
      <motion.div
        className={`absolute top-0 w-full ${isBackground ? "" : "z-10"}`}
        variants={container}
        initial="hidden"
        animate="show"
        style={{ height: glass.maskRatio + "%", }}
      >
        <div className="relative flex flex-col-reverse"
          style={{
            clipPath: "url(#mask)",
            left: `${2 * glass.strokeWidth}px`,
            top: `${2 * glass.strokeWidth}px`,
            gap: `${glass.gap}px`,
            height: `calc(100% - ${2 * (glass.gap + glass.strokeWidth)}px)`,
            width: `calc(100% - ${2 * (glass.gap + glass.strokeWidth)}px)`,
          }}
        >
          {adjustedIngredients.map((ingredient) => (
            <div
              key={ingredient.id}
              className="bg-transparent relative"
              style={{
                height: ingredient.amount + "%"
              }}
              title={ingredient.name}>
              <div
                className="absolute bottom-0 left-0 w-full h-full"
                style={{
                  backgroundColor: ingredient.color,
                }}
              />
            </div >
          ))
          }
        </div>

      </motion.div>

    )
  }


  return (
    <>
      {/* duplicate the drink stack for the background for glow effect */}
      {getStack(true)}
      {/* The glow div applying backdropFilter to previous div block */}
      <div
        className="absolute bottom-0 left-0 pointer-events-none 
                    opacity-40 -translate-x-1/2 scale-150"
        style={{
          height: `calc(${glass.maskRatio}% - 
                    ${2 * (glass.gap + glass.strokeWidth)}px)`,
          // width: `calc(100% - ${2 * (glass.gap + glass.strokeWidth)}px)`,
          width: '100vw',
          left: `${2 * glass.strokeWidth}px`,
          top: `${2 * glass.strokeWidth}px`,
          backdropFilter: "blur(20px) brightness(1.1)",
        }}>
      </div>
      {/* Actual drink stack to display */}
      {getStack()}
    </>

  );
};

export default DrinkStack;
