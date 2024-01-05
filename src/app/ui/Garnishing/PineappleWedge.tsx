'use client';
import React, { useEffect } from "react";
import { GarnishingType } from "@/app/lib/mockdata";
import { motion, useAnimate } from "framer-motion";

const PineappleWedge = (props: GarnishingType) => {
  const { strokeColor = "white", strokeWidth = 2, fill = "none" } = props;

  const [scope, animate] = useAnimate();
  useEffect(() => {
    (async () => {
      await animate(scope.current, {
        opacity: 1,
        x: '0%',
        y: '0%',
        scale: 1,
        rotate: 10,
      }, { duration: 0.4 });

      animate(scope.current, {
        rotate: 0,
      }, {
        type: 'spring',
        bounce: 1,
        stiffness: 50,
        damping: 2
      });

    })();

  }, [scope, animate])


  return (
    <motion.div
      ref={scope}
      initial={{
        opacity: 0.5,
        x: '-25%',
        y: '135%',
        scale: 0.1,
        rotate: -45,
      }}
      className="absolute pointer-events-none w-[65%] opacity-0
                  top-0 right-0"
    >
      <div className="translate-x-1/2 -translate-y-1/2">
        <svg width="100%" viewBox="0 0 100 111" fill={fill} xmlns="http://www.w3.org/2000/svg">
          <path d="M6.19783 0.639313L0.987305 92.8229L39.4149 111L99.9873 46.082
        C97.382 40.2393 86.5702 25.3082 64.1649 12.3246
        C41.7597 -0.659048 16.1847 -0.875441 6.19783 0.639313Z"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
        </svg>
      </div>

    </motion.div>
  );
};

export default PineappleWedge;
