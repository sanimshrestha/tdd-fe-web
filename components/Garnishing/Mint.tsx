'use client';
import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import { drinkSchemaOutput } from "@server/schema/drink.schema";
import { GarnishingProps } from ".";
import { garnishingPlacements } from "./garnishingPlacements";
import animationStages from "./animations";

const Mint = (props: GarnishingProps) => {
  const { animate: showAnimation, garnishing, glass } = props;
  const {
    strokeWidth = 2,
    strokeColor = "3A9700",
    fill = "#3A9700",
    placement = "top-center",
  } = garnishing;

  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!showAnimation) return;
    (async () => {
      await animate(scope.current, animationStages[1],
        { duration: 0.4, delay: 0.3 });

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
      style={{ top: `${topPos}%`, left: `${leftPos}%` }}
      className="absolute pointer-events-none w-[24.6%] z-10" //124/504 = 24.6%
    >
      <div
        style={{
          transform:
            `translate(${translateX || "-50%"}, ${translateY || "-50%"}) 
            rotate(${rotation}deg)`
        }}>
        <motion.svg width="100%" viewBox="0 0 124 124" xmlns="http://www.w3.org/2000/svg"
          ref={scope}
          initial={showAnimation ? animationStages[0] : animationStages[2]}
        >
          <path d="M4 41.4214C23.3664 38.698 52.5307 45.372 62.0993 88.627
          C65.1231 102.296 25.6691 52.2819 4 41.4214Z"
            fill={fill}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
          <path
            d="M79.8016 44.0836C93.9633 29.9219 112.936 29.1049 120.653 30.4666
          C94.7621 51.2993 81.9338 64.9842 63.098 90.5094
          C62.5149 91.2995 61.296 90.8722 61.377 89.8936
          C62.3402 78.2663 66.9405 56.9447 79.8016 44.0836Z"
            fill={fill}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
          <path
            d="M56.7843 66.7659C55.9937 61.6273 58.9026 48.0047 61.7773 45.4326
          C64.9546 47.2482 66.8609 53.7844 67.2241 58.1418
          C67.5425 61.9626 65.325 79.0908 62.224 89.882
          C61.931 90.9016 60.5396 90.7403 60.4098 89.6873
          C59.3991 81.4929 57.5514 71.7524 56.7843 66.7659Z"
            fill={fill}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
        </motion.svg>
      </div>
    </motion.div >
  );
};

export default Mint;
