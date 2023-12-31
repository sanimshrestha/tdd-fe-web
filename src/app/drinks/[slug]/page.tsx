import React, { useState, useEffect } from "react";
import { drinks } from "./../../../utils/mockdata";
import DrinkMaker from "@/components/DrinkMaker/DrinkMaker";


const getDrinkId = (slug: string) => {
  const drink = drinks.find((d) => d.slug === slug);
  return drink ? drink.id : null;
}

const Drink = ({ params }: { params: { slug: string } }) => {
  const drinkId = getDrinkId(params.slug);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center 
                     p-24 bg-black">
      <div className="w-auto relative">
        {drinkId && <DrinkMaker drinkId={drinkId} />}
      </div>
    </main>
  );
};


export default Drink;
