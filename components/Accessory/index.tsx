import React from "react";
import Straw from "./Straw";
import { drinkSchemaOutput } from "@server/schema/drink.schema";

const Accessory = (props: NonNullable<drinkSchemaOutput["accessory"]
  & { animate: boolean }>) => {
  const { name = "Straw" } = props;

  switch (name.toLowerCase()) {
    case 'straw':
    default:
      return <Straw {...props} />;
  }
};

export default Accessory;
