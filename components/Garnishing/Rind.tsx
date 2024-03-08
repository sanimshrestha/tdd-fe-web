'use client';
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
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


const Rind = (props: GarnishingProps) => {
  const { animate: showAnimation, garnishing, glass } = props;
  const {
    strokeWidth = 2,
    strokeColor = "FF902B",
    fill = "#FF902B",
    placement = "top_slight_down-center",
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
        <svg width="100%" viewBox="0 0 124 248" xmlns="http://www.w3.org/2000/svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="124" height="248" viewBox="0 0 12 124" fill="none">
          </svg>
          <path
            d="M81.3839 1.20047C59.6099 1.20047 41.8827 10.1185 34.3296 23.4995
          C32.8164 34.0402 38.9728 47.1967 57.5381 60.9815
          C99.9689 92.4864 113.41 141.491 109.294 163.652
          C110.95 177.266 107.758 189.153 98.1118 197.268
          C64.0176 225.951 17.822 238.125 22.3028 235.699
          C39.3866 226.447 88.5275 199.289 106.544 171.292
          C107.787 169.36 108.714 166.772 109.294 163.652
          C105.939 136.077 82.6952 101.414 52.9111 76.6384
          C29.8536 57.4584 26.2032 37.896 34.3296 23.4995
          C36.7616 6.55844 59.0051 -3.62538 81.3839 1.20047Z"
            fill={fill}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
          <path
            d="M74.0587 246.794C52.0373 246.794 34.1087 237.839 26.4697 224.401
            C24.9393 213.816 31.1656 200.603 49.9419 186.76
            C92.8549 155.122 106.448 105.909 102.286 83.6541
            C103.961 69.9824 100.733 58.0459 90.9767 49.8961
            C56.4951 21.0916 9.77457 8.86578 14.3062 11.3026
            C31.5842 20.5937 81.2835 47.8663 99.5046 75.9825
            C100.762 77.9227 101.7 80.5213 102.286 83.6541
            C98.8931 111.346 75.3849 146.156 45.2624 171.037
            C21.9428 190.298 18.251 209.943 26.4697 224.401
            C28.9293 241.414 51.4257 251.641 74.0587 246.794Z"
            fill={fill}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
        </svg>
      </div>
    </motion.div >
  );
};

export default Rind;
