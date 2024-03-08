'use client';
import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import { drinkSchemaOutput } from "@server/schema/drink.schema";
import { GarnishingProps } from ".";
import { garnishingPlacements } from "./garnishingPlacements";

const animationStages = [
  {
    opacity: 0,
    x: '-25%',
    y: '135%',
    scale: 0.1,
    rotate: -45,
  },
  {
    opacity: 1,
    x: '0%',
    y: '0%',
    scale: 1,
    rotate: 10,
  },
  {
    rotate: 0,
  }
]


const Cherry = (props: GarnishingProps) => {
  const { animate: showAnimation, garnishing, glass } = props;
  const {
    strokeWidth = 2,
    strokeColor = "#8E0000",
    fill = "#8E0000",
    placement = "bottom-center_slight_right",
  } = garnishing;

  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!showAnimation) return;
    (async () => {
      await animate(scope.current, animationStages[1], { duration: 0.4 });

      animate(scope.current, animationStages[2], {
        type: 'spring',
        bounce: 1,
        stiffness: 50,
        damping: 2
      });

    })();
  }, [showAnimation, scope, animate])

  const placementData = garnishingPlacements[glass.name][placement]

  if (garnishing.top) placementData.top = garnishing.top
  if (garnishing.left) placementData.left = garnishing.left
  if (garnishing.rotation) placementData.rotation = garnishing.rotation

  const { top, left, rotation, translateX, translateY } = placementData
  const leftPos = ((100 - glass.width) / 2) + (Number(left) * glass.width / 100)
  const topPos = (100 - glass.height) + (Number(top) * (glass.height / 100)
    * ((glass.drinkContainerHeightPercent || 100) / 100))

  return (
    <motion.div
      ref={scope}
      initial={showAnimation ? animationStages[0] : animationStages[2]}
      style={{ top: `${topPos}%`, left: `${leftPos}%` }}
      className="absolute pointer-events-none w-[24.6%] z-10" //124/504 = 24.6%
    >
      <div
        style={{
          transform:
            `translate(${translateX || "-50%"}, ${translateY || "-50%"}) 
            rotate(${rotation}deg)`
        }}>
        <svg width="100%" viewBox="0 0 124 124" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="62" cy="62" r="32"
            fill={fill}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
        </svg>
      </div>
    </motion.div >
  );
};

export default Cherry;
