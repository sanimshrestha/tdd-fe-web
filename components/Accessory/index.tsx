import React from "react";
import Straw from "./Straw";

const Accessory = (props: any) => {
  const { name = "Straw" } = props;

  switch (name.toLowerCase()) {
    case 'straw':
    default:
      return <Straw {...props} />;
  }
};

export default Accessory;
