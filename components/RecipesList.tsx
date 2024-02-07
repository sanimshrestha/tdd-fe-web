'use client'
import React from "react"
import RecipeCard from "./RecipeCard"
import { useGetDrinksQuery } from "@redux/services/drinks"
import { Skeleton } from "./ui/skeleton";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "./ui/pagination";

const RecipesList = () => {
  const { data: allDrinks, isLoading } = useGetDrinksQuery()

  return (
    <div className="flex flex-col p-8 gap-8">
      <div className="flex flex-col md:flex-row flex-wrap gap-4 
                    pt-4 justify-start items-center 
                    md:justify-center md:items-start">
        {isLoading
          ? (
            Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-[420px] w-[384px] 
                                            max-w-[90%] pt-6" />
            ))
          )
          : (
            allDrinks && allDrinks.map((drink, i) => (
              <RecipeCard key={drink.slug} drink={drink} />
            ))
          )}
      </div>

      {/* <Pagination className="hidden md:flex pt-5 border-t border-border-secondary">
        <PaginationContent className="w-full justify-between">
          <PaginationPrevious href="#" />
          <div className="flex">
            <PaginationLink href="#">1</PaginationLink>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </div>
          <PaginationNext href="#" />
        </PaginationContent>
      </Pagination> */}
    </div>

  );
};

export default RecipesList;
