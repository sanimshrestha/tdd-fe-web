'use client';
import { drinkSchemaOutput } from "@/api/schema/drink.schema";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface DrinkStackProps {
  ingredients: drinkSchemaOutput["ingredients"];
  glass: drinkSchemaOutput["glass"];
  animate: boolean;
}

const DrinkStack = ({ ingredients, glass, animate }: DrinkStackProps) => {
  const {
    drinkPaddingPercent = 25,
    drinkContainerHeightPercent = 100,
    gap = 2,
    strokeWidth = 2 } = glass;
  const [blur, setblur] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const height = ref.current.offsetHeight;
      setblur(height * 0.082);
      // ref.current.style.marginTop = `${height * 0.15}px`; // Set top margin to 10% of the element's height
    }
  }, []);

  const totalIngredientParts = ingredients.reduce((acc, curr) => {
    return acc + curr.parts;
  }, 0);

  const adjustedIngredients = ingredients.map((ingredient) => {
    return {
      ...ingredient,
      parts: (ingredient.parts / totalIngredientParts)
        * (100 - drinkPaddingPercent)
    }
  });

  // Framer motion variants for the drinks stack
  const container = {
    hidden: {
      clipPath: animate ? 'inset(100% 0 0 0)' : 'inset(0 0 0 0)'
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
        ref={isBackground ? ref : null}
        className={`absolute top-0 w-full 
                    ${isBackground ? "filter brightness-110" : "z-10"}`}
        variants={container}
        initial={"hidden"}
        animate={"show"}
        style={{ height: drinkContainerHeightPercent + "%", }}
      >
        <div className="relative flex flex-col-reverse"
          style={{
            clipPath: `url(#${glass.name.toLowerCase()}-mask)`,
            left: `${2 * strokeWidth}px`,
            top: `${2 * strokeWidth}px`,
            gap: `${gap}px`,
            height: `calc(100% - ${2 * (gap + strokeWidth)}px)`,
            width: `calc(100% - ${2 * (gap + strokeWidth)}px)`,
          }}
        >
          {adjustedIngredients.map((ingredient) => (
            <div
              key={ingredient.name}
              className="bg-transparent relative"
              style={{
                height: ingredient.parts + "%"
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
      {animate &&
        <>
          {/* duplicate the drink stack for the background for glow effect */}
          {getStack(true)}
          {/* The glow div applying backdropFilter to previous div block */}
          <div
            className="absolute bottom-0 left-0 pointer-events-none 
                    opacity-40 scale-150"
            style={{
              height: `calc(${drinkContainerHeightPercent}% - 
                    ${2 * (gap + strokeWidth)}px)`,
              // width: `calc(100% - ${2 * (gap + strokeWidth)}px)`,
              width: '100vw',
              top: `${2 * strokeWidth}px`,
              backdropFilter: `blur(${blur}px)`,
              left: `calc(-1 * (100vw - 100%) / 2)`
            }}>
          </div>
        </>}
      {/* Actual drink stack to display */}
      {getStack()}
    </>

  );
};

export default DrinkStack;
