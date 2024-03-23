'use client'
import DrinkStack from "../DrinkStack/DrinkStack";
import Accessory from "../Accessory";
import Garnishing from "../Garnishing";
import Glass from "../Glass";
import { drinkSchemaOutput } from "@server/schema/drink.schema";
import { useEffect, useState } from "react";
import useScreenSize from "@/lib/hooks/useScreenSize";
import { clamp } from "@/lib/utils";
import { drinkGrid } from "@/lib/constants";
import { Skeleton } from "../ui/skeleton";

const DrinkMaker = ({ drink, thumbnail = false }:
  { drink?: drinkSchemaOutput, thumbnail?: boolean }) => {
  const [dimensions, setdimensions] = useState(drinkGrid.dimensionsPx);
  const screenSize = useScreenSize();

  useEffect(() => {
    if (screenSize.height > 0) {
      const height = thumbnail ? 320
        : clamp(screenSize.height * drinkGrid.suggestedGlassHeight,
          drinkGrid.minGlassHeightPx, drinkGrid.dimensionsPx.height);

      const width = height *
        (drinkGrid.dimensionsPx.width / drinkGrid.dimensionsPx.height);
      setdimensions({ width, height });
    }
  }, [thumbnail, screenSize]);

  return (
    !drink
      ? <Skeleton className="h-[400px] w-[320px] max-w-[90%] pt-6" />
      : <div className="drinkmaker relative flex flex-col justify-end"
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
        }} >

        <div className="relative mx-auto"
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
        {drink.garnishing?.map((garnishing) =>
          <Garnishing
            key={garnishing.name}
            garnishing={garnishing}
            // {...garnishing}
            glass={drink.glass}
            animate={!thumbnail} />
        )}
      </div>
  )
};

export default DrinkMaker;
