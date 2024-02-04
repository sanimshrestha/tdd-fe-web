import React from "react";
import PineappleWedge from "./PineappleWedge";

const Garnishing = (props: any) => {
  const { name = "pineapple wedge" } = props;

  switch (name.toLowerCase()) {
    case "pineapple wedge":
    default:
      return <PineappleWedge {...props} />;
  }
};

export default Garnishing;
