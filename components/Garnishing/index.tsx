import React from "react";
import PineappleWedge from "./PineappleWedge";
import { drinkSchemaOutput } from "@server/schema/drink.schema";

const Garnishing = (props: NonNullable<drinkSchemaOutput["garnishing"]>[number]
  & { animate: boolean }) => {
  const { name = "pineapple wedge" } = props;

  switch (name.toLowerCase()) {
    case "pineapple wedge":
    default:
      return <PineappleWedge {...props} />;
  }
};

export default Garnishing;
