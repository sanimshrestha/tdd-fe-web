import React from "react";
import PineappleWedge from "./PineappleWedge";
import { GarnishingType } from "@/app/lib/mockdata";

const Garnishing = (props: GarnishingType) => {
  const { slug = "pineapple-wedge" } = props;

  switch (slug.toLowerCase()) {
    case 'pineapple-wedge':
    default:
      return <PineappleWedge {...props} />;
  }
};

export default Garnishing;
