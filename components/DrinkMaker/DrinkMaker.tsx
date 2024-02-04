'use client'
import DrinkStack from "../DrinkStack/DrinkStack";
import Accessory from "../Accessory";
import Garnishing from "../Garnishing";
import Glass from "../Glass";
import { useEffect, useRef } from "react";


const DrinkMaker = ({ drink, thumbnail = false }:
  { drink: any, thumbnail?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const height = ref.current.offsetHeight;
      ref.current.style.marginTop = `${height * 0.15}px`; // Set top margin to 10% of the element's height
    }
  }, []);

  return (
    <div ref={ref} className="w-auto drinkmaker flex flex-col justify-end">
      <div className="w-auto relative"
      // style={{
      //   maxWidth: 'min(250px,18dvh)',
      // }}
      >
        {drink.ingredients && drink.glass &&
          <>
            <DrinkStack
              ingredients={drink.ingredients}
              glass={drink.glass}
              animate={!thumbnail}
            />
          </>
        }
        {drink.accessory &&
          <Accessory
            {...drink.accessory}
            animate={!thumbnail}
          />}
        {drink.glass &&
          <Glass {...drink.glass}
          />}
        {/* {drink.garnishing && <Garnishing {...drink.garnishing} animate={!thumbnail} />} */}

      </div >
    </div>

  )
};

export default DrinkMaker;
