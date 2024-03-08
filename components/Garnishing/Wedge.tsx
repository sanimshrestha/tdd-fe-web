'use client';
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { GarnishingProps } from ".";
import {
  defaultGarnishingPlacements,
  garnishingPlacements
} from "./garnishingPlacements";

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


const Wedge = (props: GarnishingProps) => {
  const { animate: showAnimation, garnishing, glass } = props;
  const {
    strokeWidth = 2,
    strokeColor = "F1D283",
    fill = "#F1D283",
    placement = "bottom_slight_up-center",
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
    || defaultGarnishingPlacements
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
        <svg width="100%" viewBox="0 0 140 248" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 248C32.9397 248 49.6998 244.529 65.2463 237.802
          C80.7928 231.074 94.7961 221.232 106.392 208.884
          C117.988 196.535 126.931 181.942 132.669 166.004
          C138.407 150.065 140.819 133.12 139.755 116.214
          C138.692 99.3077 134.175 82.7986 126.485 67.7052
          C118.794 52.6118 108.093 39.2542 95.0406 28.4564
          C81.9883 17.6586 66.862 9.64962 50.5949 4.92359
          C34.3278 0.197552 17.2649 -1.14533 0.458694 0.977775
          L16 124L16 248Z"
            fill={fill}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
        </svg>
      </div>
    </motion.div >
  );
};

export default Wedge;
