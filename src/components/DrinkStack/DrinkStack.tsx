'use client';
import { GlassType, IngredientsWithAmount } from "@/utils/mockdata";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface DrinkStackProps {
  ingredients: IngredientsWithAmount[];
  glass: GlassType
}

const DrinkStack = (props: DrinkStackProps) => {
  const { ingredients, glass } = props;
  const [animationVariant, setanimationVariant] = useState<string>('hidden');

  // Framer motion variants for the drinks stack
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: {
      height: 0,
    },
    show: {
      height: '100%',
      transition: {
        ease: "easeInOut",
        duration: 0.06,
      }
    }
  }

  // Mouse Events
  const handleClick = () => {
    // Toggle between 'hidden' and 'show'
    setanimationVariant((prevVariant) =>
      prevVariant === 'hidden' ? 'show' : 'hidden'
    );
  };

  const getStack = () => {
    return (
      <motion.div
        className="absolute top-0 flex flex-col-reverse w-full h-full"
        variants={container}
        initial="hidden"
        animate={animationVariant}
        onClick={handleClick}
        style={{
          clipPath: "url(#mask)",
          height: `calc(${glass.maskRatio}% - 
                  ${2 * (glass.gap + glass.strokeWidth)}px)`,
          width: `calc(100% - ${2 * (glass.gap + glass.strokeWidth)}px)`,
          left: `${2 * glass.strokeWidth}px`,
          top: `${2 * glass.strokeWidth}px`,
          gap: `${glass.gap}px`,
        }} >
        {ingredients.map((ingredient) => (
          <div
            key={ingredient.id}
            className="bg-transparent relative"
            style={{
              height: ingredient.amount + "%"
            }}
            title={ingredient.name}>
            <motion.div
              className="absolute bottom-0 left-0 w-full "
              style={{
                backgroundColor: ingredient.color,
              }}
              variants={item}
            />
          </div >
        ))
        }
      </motion.div>
    )
  }


  return (
    <>
      {/* duplicate the drink stack for the background for glow effect */}
      {getStack()}
      {/* The glow div applying backdropFilter to previous div block */}
      <div
        className="absolute bottom-0 left-0 pointer-events-none 
                    opacity-30 scale-150"
        style={{
          height: `calc(${glass.maskRatio}% - 
                    ${2 * (glass.gap + glass.strokeWidth)}px)`,
          width: `calc(100% - ${2 * (glass.gap + glass.strokeWidth)}px)`,
          left: `${2 * glass.strokeWidth}px`,
          top: `${2 * glass.strokeWidth}px`,
          backdropFilter: "blur(20px) brightness(1.1)"
        }}>
      </div>
      {/* Actual drink stack to display */}
      {getStack()}
    </>

  );
};

export default DrinkStack;
