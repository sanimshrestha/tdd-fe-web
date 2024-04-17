import React from "react";
import Wedge from "./Wedge";
import { drinkSchemaOutput } from "@server/schema/drink.schema";
import Cherry from "./Cherry";
import Mint from "./Mint";
import Rind from "./Rind";
import QuarterWedge from "./QuarterWedge";

export type GarnishingProps = {
  garnishing: NonNullable<drinkSchemaOutput["garnishing"]>[number];
  glass: NonNullable<drinkSchemaOutput["glass"]>;
  animate: boolean;
}

const garnishData:
  {
    [key: string]:
    { [key: string]: Partial<GarnishingProps["garnishing"]> }
  } = {
  "quarter wedge": {
    "pineapple quarter wedge": {
      strokeColor: "#F1D283",
      fill: "#F1D283",
    },
    "lime quarter wedge": {
      strokeColor: "#B3DC5B",
      fill: "#B3DC5B",
    },
    "lemon quarter wedge": {
      strokeColor: "#FBD719",
      fill: "#FBD719",
    },
    "orange quarter wedge": {
      strokeColor: "#FF902B",
      fill: "#FF902B",
    }
  },
  "wedge": {
    "pineapple wedge": {
      strokeColor: "#F1D283",
      fill: "#F1D283",
    },
    "lime wedge": {
      strokeColor: "#B3DC5B",
      fill: "#B3DC5B",
    },
    "lemon wedge": {
      strokeColor: "#FBD719",
      fill: "#FBD719",
    },
    "orange wedge": {
      strokeColor: "#FF902B",
      fill: "#FF902B",
    }
  },
  "cherry": {
    "cherry": {
      strokeColor: "#8E0000",
      fill: "#8E0000",
    }
  },
  "mint": {
    "mint": {
      strokeColor: "#3A9700",
      fill: "#3A9700",
    },
    "basil": {
      strokeColor: "#3A9700",
      fill: "#3A9700",
    },
    "rosemary": {
      strokeColor: "#3A9700",
      fill: "#3A9700",
    },
    "coriander": {
      strokeColor: "#3A9700",
      fill: "#3A9700",
    }
  },
  "rind": {
    "orange rind": {
      strokeColor: "#FF902B",
      fill: "#FF902B",
    },
    "lemon rind": {
      strokeColor: "#FBD719",
      fill: "#FBD719",
    }
  }
}
const Garnishing = (props: GarnishingProps) => {
  const { garnishing } = props;
  const { type = "wedge", name = "pineapple wedge" } = garnishing;

  switch (type.toLowerCase()) {
    case "quarter wedge":
      return <QuarterWedge
        {...{
          ...props,
          garnishing:
          {
            ...props.garnishing,
            ...garnishData["quarter wedge"][name.toLowerCase()]
          }
        }} />
    case "wedge":
      return <Wedge
        {...{
          ...props,
          garnishing:
          {
            ...props.garnishing,
            ...garnishData["wedge"][name.toLowerCase()]
          }
        }} />
    case "cherry":
      return <Cherry
        {...{
          ...props,
          garnishing:
          {
            ...props.garnishing,
            ...garnishData["cherry"][name.toLowerCase()]
          }
        }} />
    case "mint":
      return <Mint
        {...{
          ...props,
          garnishing:
          {
            ...props.garnishing,
            ...garnishData["mint"][name.toLowerCase()]
          }
        }} />
    case "rind":
      return <Rind
        {...{
          ...props,
          garnishing:
          {
            ...props.garnishing,
            ...garnishData["rind"][name.toLowerCase()]
          }
        }} />
    default:
      return null;
  }
};

export default Garnishing;
