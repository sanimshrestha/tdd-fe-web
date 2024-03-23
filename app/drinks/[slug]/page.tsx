'use client'
import DrinkMaker from "@components/DrinkMaker/DrinkMaker";
import IngredientFooter from "@components/IngredientFooter";
import { Button } from "@ui/button";
import { Skeleton } from "@ui/skeleton";
import { useToast } from "@ui/use-toast";
import { setRecentDrink } from "@redux/features/ui";
import { useAppDispatch } from "@redux/hooks";
import { useGetDrinkBySlugQuery } from "@redux/services/drinks";
import { Share1Icon } from "@radix-ui/react-icons";
import { useEffect } from "react";


const Drink = ({ params }: { params: { slug: string } }) => {
  const { data: drink, isLoading, isFetching } =
    useGetDrinkBySlugQuery(params.slug);
  const { toast } = useToast()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!drink) return;
    dispatch(setRecentDrink(drink))
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
    <div className="flex flex-col gap-4 grow items-center 
    justify-between overflow-x-hidden">
      <section className="flex flex-col justify-center items-center gap-2">
        {isLoading ?
          <>
            <Skeleton className="h-8 w-32 mt-4" />
            <Skeleton className="h-7 w-40" />
          </>
          : (
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
      {isLoading ?
        (<>
          <Skeleton className="h-[400px] w-[320px] max-w-[90%] pt-6" />
          <div className="flex flex-col gap-4 p-2 items-center">
            <Skeleton className="h-7 w-36" />
            <div className="flex gap-4">
              <Skeleton className="h-16 w-16" />
              <Skeleton className="h-16 w-16" />
              <Skeleton className="h-16 w-16" />
            </div>
          </div>
        </>)
        : (
          drink &&
          <>
            <DrinkMaker drink={drink} />
            <IngredientFooter drink={drink} />
          </>
        )
      }
    </div>
  );
};


export default Drink;
