import { Metadata } from "next";

export const constants = {
  productTitle: "The Drinks Diary",
  productDescription: "Recipe book for cocktails",
};

export const images = {
  logo: "/logo.png",
};

export const metadatajson: Metadata = {
  metadataBase: new URL("https://thedrinksdiary.com/"),
  title: constants.productTitle,
  description: constants.productDescription,
  generator: "Next.js",
  applicationName: constants.productTitle,
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "Cocktails",
    "Drinks",
    "Drink Maker",
    "Recipes",
  ],
  authors: [
    { name: "Sampada Bhujel", url: "https://sampada.dev/" },
    { name: "Sanim Shrestha", url: "https://www.sanimshrestha.com/" },
  ],
  openGraph: {
    title: constants.productTitle,
    description: constants.productDescription,
    url: "thedrinksdiary.com",
    siteName: constants.productTitle,
    images: [
      {
        url: "/og-img.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: constants.productTitle,
    description: constants.productDescription,
    images: [
      {
        url: "/og-img.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export const drinkGrid = {
  dimensionsPx:{
  width: 504,
  height: 704,
},
minGlassHeightPx: 250,
suggestedGlassHeight: 0.55,
};
export const drinkGridMobile = {
  dimensionsPx:{
  width: 504,
  height: 704,
},
minGlassHeightPx: 250,
suggestedGlassHeight: 0.45,
};

export type ConstantsType = typeof constants;
