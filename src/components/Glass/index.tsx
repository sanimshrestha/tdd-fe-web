import React from "react";
import { GlassProps } from "./types";
import Cocktail from "./Cocktail";

const Glass = (props: GlassProps) => {
  const { name = "Cocktail" } = props;

  switch (name.toLowerCase()) {
    case 'cocktail':
    default:
      return <Cocktail {...props} />;
  }
};

export default Glass;
