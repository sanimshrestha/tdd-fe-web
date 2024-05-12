'use client';
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { GarnishingProps } from ".";
import { garnishingPlacements } from "./garnishingPlacements";
import animationStages from "./animations";

const QuarterWedge = (props: GarnishingProps) => {
  const { animate: showAnimation, garnishing, glass } = props;
  const {
    strokeWidth = 2,
    strokeColor = "F1D283",
    fill = "#F1D283",
    placement = "top-right"
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
        <motion.svg width="100%" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg"
          ref={scope}
          initial={showAnimation ? animationStages[0] : animationStages[2]}
        >
          <g clipPath="url(#clip0_1_396)">
            <path d="M124 124C124 92.461 111.982 62.1071 90.3921 39.1162
            C68.8022 16.1252 39.2628 2.22504 7.78603 0.244686
            L0 124H124Z"
              fill={fill}
              stroke={strokeColor}
              strokeWidth={strokeWidth} />
          </g>
          <defs>
            <clipPath id="clip0_1_396">
              <rect width="124" height="124" fill="white" />
            </clipPath>
          </defs>
        </motion.svg>
      </div>

    </motion.div >
  );
};

export default QuarterWedge;
