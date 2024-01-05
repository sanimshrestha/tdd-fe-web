import React from "react";
import { GlassProps } from "./types";
import Cocktail from "./Cocktail";
import Colada from "./Colada";

const Glass = (props: GlassProps) => {
  const { name = "Cocktail" } = props;

  switch (name.toLowerCase()) {
    case 'colada':
      return <Colada {...props} />;
    case 'cocktail':
    default:
      return <Cocktail {...props} />;
  }
};

export default Glass;
