'use client';
import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import { drinkSchemaOutput } from "@/api/schema/drink.schema";

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

const PineappleWedge = (props: NonNullable<drinkSchemaOutput["garnishing"]
  & { animate: boolean }>) => {
  const {
    strokeColor = "white",
    strokeWidth = 2,
    fill = "none",
    top = "0",
    left = "0",
    animate: showAnimation } = props;

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

  return (
    <motion.div
      ref={scope}
      initial={showAnimation ? animationStages[0] : animationStages[2]}
      style={{ top: `${top}%`, left: `${left}%` }}
      className="absolute pointer-events-none w-[65%]"
    >
      <div className="-translate-x-1/2 -translate-y-1/2">
        <svg width="100%" viewBox="0 0 100 111" fill={fill} xmlns="http://www.w3.org/2000/svg">
          <path d="M6.19783 0.639313L0.987305 92.8229L39.4149 111L99.9873 46.082
        C97.382 40.2393 86.5702 25.3082 64.1649 12.3246
        C41.7597 -0.659048 16.1847 -0.875441 6.19783 0.639313Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
        </svg>
      </div>

    </motion.div >
  );
};

export default PineappleWedge;
