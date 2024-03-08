type placementValues = {
  top: string,
  left: string,
  rotation: string,
  translateX?: string,
  translateY?: string,
}
// type placementsKeys = keyof typeof placements
type GarnishingPlacementType = {
  // [key: string]: {[K in placementsKeys]: placementValues}
  [key: string]: {[key: string]: placementValues}
}

export const defaultGarnishingPlacements: {[key: string]: placementValues} = {
  "top-left": {
    top: "0",
    left: "0",
    rotation: "0",
  },
  "top-center": {
    top: "0",
    left: "50",
    rotation: "0",
  },
  "top-right": {
    top: "0",
    left: "100",
    rotation: "0",
  },
  "top_slight_down-center": {
    top: "40",
    left: "50",
    rotation: "0",
  },
  "bottom_slight_up-center": {
    top: "40",
    left: "50",
    rotation: "0",
  },
  "bottom-center_slight_right": {
    top: "100",
    left: "50",
    rotation: "0",
    translateY: "-100%",
    translateX: "-25%",
  },
}

export const garnishingPlacements:GarnishingPlacementType = {
  Coupe:{
    ...defaultGarnishingPlacements,
    "top-right":{ //for quarter wedge
      top: "-4",
      left: "95",
      rotation: "-48",
    },
    "bottom_slight_up-center": { // for wedge
      top: "90",
      left: "50",
      rotation: "125",
      translateY: "-100%",
    },
    "top-center": { // for mint
      ...defaultGarnishingPlacements["top-center"],
      top: "12",
    },
    "top_slight_down-center": { // for rind
      top: "-18",
      left: "50",
      rotation: "90",
      translateY: "0",
    },
    
  },
  Martini: {
    ...defaultGarnishingPlacements,
    "bottom_slight_up-center": { // for wedge
      ...defaultGarnishingPlacements["bottom_slight_up-center"],
      top: "50",
      left: "68",
      rotation: "60",
      translateX: "-100%",
    },
    "bottom-center_slight_right":{ //for cherry
      ...defaultGarnishingPlacements["bottom-center_slight_right"],
      top: "80",
    },
    "top-center": { //for mint
      ...defaultGarnishingPlacements["top-center"],
      top: "15",
    },
    "top_slight_down-center": { //for rind
      ...defaultGarnishingPlacements["top_slight_down-center"],
      top: "-14",
      rotation: "90",
      translateY: "0",
    },
  },
  Rocks: {
    ...defaultGarnishingPlacements,
    "top-right": { //for quarter wedge
      ...defaultGarnishingPlacements["top-right"],
      translateX: "-40%",
    },
    "bottom_slight_up-center": { //for wedge
      ...defaultGarnishingPlacements["bottom_slight_up-center"],
      top: "100",
      rotation: "85",
      translateY: "-100%",
    },
    "bottom-center_slight_right":{ //for cherry
      ...defaultGarnishingPlacements["bottom-center_slight_right"],
      top: "90",
    },
    "top-center": { //for mint
      ...defaultGarnishingPlacements["top-center"],
      top: "23.1",
    },
    "top_slight_down-center": { //for rind
      ...defaultGarnishingPlacements["top_slight_down-center"],
      top: "0",
      translateY: "0",
      rotation: "45",
    },
  },
  Collins: {
    ...defaultGarnishingPlacements,
    "top-right": { //for quarter wedge
      ...defaultGarnishingPlacements["top-right"],
      translateX: "-40%",
    },
    "bottom_slight_up-center": { //for wedge
      ...defaultGarnishingPlacements["bottom_slight_up-center"],
      top: "75",
      left: "60",
      rotation: "30",
      translateY: "-100%",
    },
    "bottom-center_slight_right":{ //for cherry
      ...defaultGarnishingPlacements["bottom-center_slight_right"],
      top: "92",
    },
    "top-center": { //for mint
      ...defaultGarnishingPlacements["top-center"],
      top: "8.5",
    },
    "top_slight_down-center": { //for rind
      ...defaultGarnishingPlacements["top_slight_down-center"],
      top: "10",
      translateY: "0",
    },
  },
  Hurricane: {
    ...defaultGarnishingPlacements,
    "top-right": { //for quarter wedge
      ...defaultGarnishingPlacements["top-right"],
      rotation: "-21",
      top: "-2"
    },
    "bottom_slight_up-center": { //for wedge
      ...defaultGarnishingPlacements["bottom_slight_up-center"],
      top: "83",
      left: "60",
      rotation: "25",
      translateY: "-100%",
    },
    "bottom-center_slight_right":{ //for cherry
      ...defaultGarnishingPlacements["bottom-center_slight_right"],
      top: "95",
    },
    "top-center": { //for mint
      ...defaultGarnishingPlacements["top-center"],
      top: "9.4",
    },
    "top_slight_down-center": { //for rind
      ...defaultGarnishingPlacements["top_slight_down-center"],
      top: "10",
      translateY: "0",
    },

  }
}