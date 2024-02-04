'use client';
import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import { drinkSchemaOutput } from "@/api/schema/drink.schema";

const animationStages = [
  {
    opacity: 0,
    x: '25%',
    y: '30%',
    scale: 0.2,
    rotate: -35,
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

const Straw = (props: NonNullable<drinkSchemaOutput["accessory"]
  & { animate: boolean }>) => {
  const { strokeColor = "white", strokeWidth = 2, fill = "none",
    top, left, animate: showAnimation } = props;

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
      className="absolute pointer-events-none w-full h-full"
      style={{ top, left }}
    >
      <svg width="100%" height="100%" viewBox="0 0 172 368" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <path d="M1.9873 4L61.1969 32.64L86.4873 112 L167.47 366.12"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
      </svg>
    </motion.div>
  );
};

export default Straw;
