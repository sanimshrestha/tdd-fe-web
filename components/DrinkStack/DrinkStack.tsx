'use client';
import useScreenSize from "@/lib/hooks/useScreenSize";
import { useAppDispatch } from "@/redux/hooks";
import { clearHoveredIngredient, setHoveredIngredient }
  from "@redux/features/ui";
import { drinkSchemaOutput } from "@server/schema/drink.schema";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { getIngredientHeightByVolume } from "../Glass/utils";

interface DrinkStackProps {
  ingredients: drinkSchemaOutput["ingredients"];
  glass: drinkSchemaOutput["glass"];
  animate: boolean;
}

const DrinkStack = ({ ingredients, glass, animate }: DrinkStackProps) => {
  const {
    drinkContainerHeightPercent = 100,
    ingredientGap = 2,
    strokeWidth = 2 } = glass;
  let {
    sideGap = 2,
    leftPadding = 0,
    bottomGap = 2, } = glass;
  const [blur, setblur] = useState(12);
  const [glassFillAspect, setglassFillAspect] = useState("1 / 1");

  const dispatch = useAppDispatch();

  const screenSize = useScreenSize();

  const ref = useRef<HTMLDivElement>(null);

  if (!animate) {
    //if its being rendered in a thumbnail
    sideGap = sideGap / 2;
    leftPadding = leftPadding / 2;
    bottomGap = bottomGap / 2;

  }

  useEffect(() => {
    setTimeout(() => {
      if (ref.current) {
        const height = ref.current.offsetHeight;
        const parentHeight = ref.current.parentElement
          ?.parentElement?.offsetHeight || 0;
        const blurRefCurrent = height * 0.082;
        const blurRefParent = parentHeight * 0.044;
        setblur(Math.min(blurRefCurrent, blurRefParent));
      }
    }, 300);
  }, [screenSize]);

  useEffect(() => {
    if (glass?.name) {
      setglassFillAspect(
        `${document.getElementById(`${glass.name.toLowerCase()}-mask`)
          ?.getAttribute("data-width")} 
          / 
          ${document.getElementById(`${glass.name.toLowerCase()}-mask`)
          ?.getAttribute("data-height")}
          `
      );
    }
  }, [glass]);

  const adjustedIngredients = getIngredientHeightByVolume(glass, ingredients);

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
        <div
          className={`absolute flex flex-col justify-end  \
                        ${isBackground ? "pointer-events-none" : ""}
                        `}
          onMouseLeave={() => {
            dispatch(clearHoveredIngredient())
          }}
          style={{
            clipPath: `url(#${glass.name.toLowerCase()}-mask)`,
            left: `${sideGap + strokeWidth + leftPadding}px`,
            bottom: `${bottomGap}px`,
            gap: `${ingredientGap}px`,
            width: `calc(100% - ${2 * (sideGap + strokeWidth)}px)`,
            aspectRatio: `${glassFillAspect}`,
          }}
        >
          {adjustedIngredients.map((ingredient) => (
            <div
              key={ingredient.name}
              className={`bg-transparent relative  \ 
              ${isBackground ? "pointer-events-none" : ""}`}
              style={{
                height: ingredient.height + "%"
              }}
              title={ingredient.name}
              onMouseOver={() =>
                dispatch(setHoveredIngredient(ingredient.name))}
            >
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
        className="glow-filter absolute bottom-0 left-0 pointer-events-none 
                    opacity-40 scale-150 transition-[backdrop-filter] 
                    duration-300"
        style={{
          height: `calc(${drinkContainerHeightPercent}% - 
                    ${strokeWidth}px)`,
          // width: `calc(100% - ${2 * (gap + strokeWidth)}px)`,
          // width: '100vw',
          width: '150%',
          top: `${strokeWidth}px`,
          backdropFilter: `blur(${blur}px)`,
          // left: `calc(-1 * (100vw - 100%) / 2)`
        }}>
      </div>
      {/* Actual drink stack to display */}
      {getStack()}
    </>

  );
};

export default DrinkStack;
