'use client'
import { setCurrentDrink } from "@/redux/features/drinks";
import DrinkMaker from "@components/DrinkMaker/DrinkMaker";
import IngredientFooter from "@components/IngredientFooter";
import { CaretLeftIcon, CaretRightIcon, Share1Icon }
  from "@radix-ui/react-icons";
import { useAppDispatch } from "@redux/hooks";
import { useGetDrinkWithPrevNextQuery } from "@redux/services/drinks";
import { Button } from "@ui/button";
import { Skeleton } from "@ui/skeleton";
import { useToast } from "@ui/use-toast";
import Link from "next/link";
import { useEffect } from "react";

const Drink = ({ params }: { params: { slug: string } }) => {
  const { data, isLoading, isFetching } =
    useGetDrinkWithPrevNextQuery(params.slug);
  const { drink, prevDrink, nextDrink } = data || {};

  const { toast } = useToast()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!drink) return;
    dispatch(setCurrentDrink(drink))
  }, [dispatch, drink]);

  const onShare = () => {
    if (typeof window === 'undefined') return
    if (navigator.share) {
      navigator.share({
        title: "The Drinks Diary",
        text: drink?.name,
        url: window.location.href
      })
    }
    else {
      navigator.clipboard.writeText(window.location.href)
    }
    toast({
      title: "URL copied to clipboard",
    })
  }

  return (
    <>
      {prevDrink &&
        <Link
          className="absolute left-0 top-1/2 text-muted-placeholder
                      transform -translate-y-1/2 ml-8 z-20"
          href={`/drinks/${prevDrink.slug}`}>
          <CaretLeftIcon width="2rem" height="2rem" />
        </Link>}
      <div className="flex flex-col w-fit lg:max-w-4xl mx-auto
                    lg:grid lg:grid-cols-2 mt-5
                    gap-4 grow items-center justify-between 
                    lg:place-content-center lg:place-items-center"
        style={{
          gridTemplateAreas:
            "'drinkmaker drinkdetails' 'drinkmaker ingredients'"
        }}>
        <section className="flex flex-col justify-center items-center gap-2
                            w-fit lg:mx-8 z-10"
          style={{
            gridArea: "drinkdetails",
          }} >
          {isLoading ?
            <>
              <Skeleton className="ml-4 h-8 w-32 mt-4" />
              <Skeleton className="ml-4 h-7 w-48" />
              <Skeleton className="ml-4 h-10 w-32" />
            </>
            : drink && (
              <>
                <h2 className="font-bold text-foreground mt-4 text-xl 
                      leading-5 tracking-tighter">
                  {drink?.name}
                </h2>
                <p className="text-muted-foreground text-base 
                              leading-5 tracking-tight">
                  {drink?.drinkCategory?.name}
                </p>
                <Button
                  variant={"secondary"}
                  className="py-2 px-3 mt-1"
                  onClick={onShare}>
                  <Share1Icon />
                  <span className="ml-2 text-sm font-semibold px-0.5">
                    Share recipe
                  </span>
                </Button>
              </>
            )
          }
        </section>
        <DrinkMaker drink={drink} />
        <IngredientFooter drink={drink} />
      </div>
      {nextDrink &&
        <Link
          className="absolute right-0 top-1/2 text-muted-placeholder
                    transform -translate-y-1/2 mr-8 z-20"
          href={`/drinks/${nextDrink.slug}`}>
          <CaretRightIcon width="2rem" height="2rem" />
        </Link>
      }
    </>
  );
};


export default Drink;
