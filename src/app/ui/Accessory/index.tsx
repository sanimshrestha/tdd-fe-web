import React from "react";
import Straw from "./Straw";
import { AccessoryWithPosition } from "@/app/lib/mockdata";

const Accessory = (props: AccessoryWithPosition) => {
  const { name = "Straw" } = props;

  switch (name.toLowerCase()) {
    case 'straw':
    default:
      return <Straw {...props} />;
  }
};

export default Accessory;
