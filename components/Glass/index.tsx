import React from "react";
import Cocktail from "./Cocktail";
import Colada from "./Colada";
import { drinkSchemaOutput } from "@/api/schema/drink.schema";
import Martini from "./Martini";
import Coupe from "./Coupe";
import Rocks from "./Rocks";

const Glass = (props: drinkSchemaOutput["glass"]) => {
  const { name = "Cocktail" } = props;

  switch (name.toLowerCase()) {
    case 'colada':
      return <Colada {...props} />;
    case 'martini':
      return <Martini {...props} />;
    case 'coupe':
      return <Coupe {...props} />;
    case 'rocks':
      return <Rocks {...props} />;
    case 'cocktail':
    default:
      return <Cocktail {...props} />;
  }
};

export default Glass;
