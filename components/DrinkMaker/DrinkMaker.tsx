'use client'
import { drinkGrid, drinkGridMobile } from "@/lib/constants";
import useScreenSize from "@/lib/hooks/useScreenSize";
import { clamp } from "@/lib/utils";
import { drinkSchemaOutput } from "@server/schema/drink.schema";
import { useEffect, useState } from "react";
import Accessory from "../Accessory";
import DrinkStack from "../DrinkStack/DrinkStack";
import Garnishing from "../Garnishing";
import Glass from "../Glass";
import { Skeleton } from "../ui/skeleton";

const DrinkMaker = ({ drink, showShadow = false, thumbnail = false, }:
  { drink?: drinkSchemaOutput, thumbnail?: boolean, showShadow?: boolean }) => {
  const [dimensions, setdimensions] = useState({
    width: (thumbnail ? 0.45 : 1) * drinkGrid.dimensionsPx.width,
    height: (thumbnail ? 0.45 : 1) * drinkGrid.dimensionsPx.height,
  });
  const screenSize = useScreenSize();

  useEffect(() => {
    if (screenSize.height > 0) {
      let height = 0;
      let width = 0;
      if (screenSize.width < 768) {
        height = thumbnail ? 320
          : clamp(
            screenSize.height * drinkGridMobile.suggestedGlassHeight,
            drinkGridMobile.minGlassHeightPx,
            drinkGridMobile.dimensionsPx.height);

        width = height *
          (drinkGridMobile.dimensionsPx.width
            / drinkGridMobile.dimensionsPx.height);
      }
      else {
        height = thumbnail ? 320
          : clamp(screenSize.height * drinkGrid.suggestedGlassHeight,
            drinkGrid.minGlassHeightPx, drinkGrid.dimensionsPx.height);

        width = height *
          (drinkGrid.dimensionsPx.width / drinkGrid.dimensionsPx.height);
      }

      setdimensions({ width, height });
    }
  }, [thumbnail, screenSize]);

  return (
    !drink
      ? <Skeleton className="h-[400px] w-[320px] max-w-[90%] pt-6 
                              lg:justify-self-end lg:self-start"
        style={{
          gridArea: "drinkmaker",
        }} />
      : <div className={`drinkmaker relative lg:sticky lg:top-40 
                        flex flex-col ${thumbnail ? 'mt-0' : 'mt-8 lg:mt-5 '}
                        justify-end lg:justify-self-end lg:self-start`}
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
          gridArea: "drinkmaker",
          transformOrigin: `center ${100 - (drink.glass.height / 2)}%`
        }} >

        <div className="relative mx-auto drinkstack-container"
          style={{
            width: `${drink.glass.width}%`,
            height: `${drink.glass.height}%`,
          }}
        >
          <DrinkStack
            ingredients={drink.ingredients}
            glass={drink.glass}
            animate={!thumbnail}
          />
          {drink.accessory &&
            <Accessory {...drink.accessory}
              animate={!thumbnail}
            />}
          <Glass {...drink.glass} />
        </div >
        <div
          className={`shadow-base w-full h-12 absolute -bottom-4 left-0
                    ${showShadow ? 'opacity-100' : 'opacity-0'} 
                    transition-opacity duration-300
                    pointer-events-none bg-gradient-fade`}
          style={{
            zIndex: 11,
            // height: `${drink.glass.height * 0.2}%`
          }}
        >

        </div>
        {
          drink.garnishing?.map((garnishing) =>
            <Garnishing
              key={garnishing.name}
              garnishing={garnishing}
              // {...garnishing}
              glass={drink.glass}
              animate={!thumbnail} />
          )
        }
      </div >
  )
};

export default DrinkMaker;
