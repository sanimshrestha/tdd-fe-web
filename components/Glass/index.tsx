import React from "react";
import { drinkSchemaOutput } from "@server/schema/drink.schema";
import Martini from "./Martini";
import Coupe from "./Coupe";
import Rocks from "./Rocks";
import Collins from "./Collins";
import Hurricane from "./Hurricane";

const Glass = (props: drinkSchemaOutput["glass"]) => {
  const { name = "martini" } = props;

  switch (name.toLowerCase()) {
    case 'hurricane':
      return <Hurricane {...props} />;
    case 'martini':
      return <Martini {...props} />;
    case 'collins':
      return <Collins {...props} />;
    case 'coupe':
      return <Coupe {...props} />;
    case 'rocks':
      return <Rocks {...props} />;
    default:
      return <Martini {...props} />;
  }
};

export default Glass;
