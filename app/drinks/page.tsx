"use client"
import Image from "next/image";
import React from "react";
import RecipesList from "@components/RecipesList";

const Drinks = () => {
  return (
    <main className="flex flex-col grow items-center justify-start p-6 gap-4">
      <Image
        src="/images/logo-tdd.svg"
        width={172}
        height={96}
        alt="TDD logo"
        priority
        className="w-1/3 max-w-[172px] min-w-[100px]"
      />
      <RecipesList />
    </main>
  );
};

export default Drinks;
