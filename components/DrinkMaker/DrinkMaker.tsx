'use client'
import DrinkStack from "../DrinkStack/DrinkStack";
import Accessory from "../Accessory";
import Garnishing from "../Garnishing";
import Glass from "../Glass";
import { drinkSchemaOutput } from "@server/schema/drink.schema";
import { useEffect, useRef } from "react";


const DrinkMaker = ({ drink, thumbnail = false }:
  { drink: drinkSchemaOutput, thumbnail?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (drink?.glass) {
      if (ref.current) {
        const height = ref.current.offsetHeight;
        ref.current.style.marginTop = `${height * 0.15}px`; // Set top margin to 10% of the element's height
        ref.current.style.height = `${height}px`;
        const svg = `${drink.glass.name.toLowerCase()}-svg`
        const maskEl = document.getElementById(svg);
        if (maskEl && maskEl.style.aspectRatio) {
          ref.current.style.aspectRatio = maskEl.style.aspectRatio;
        }
      }
    }
  }, [drink]);

  return (
    <div ref={ref} className="drinkmaker w-auto flex flex-col justify-end">
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
          <Accessory {...drink.accessory}
            animate={!thumbnail}
          />}
        {drink.glass && <Glass {...drink.glass} />}
        {/* {drink.garnishing?.map((garnishing) =>
          <Garnishing
            key={garnishing.name}
            {...garnishing}
            animate={!thumbnail} />
        )} */}
      </div >
    </div>

  )
};

export default DrinkMaker;
