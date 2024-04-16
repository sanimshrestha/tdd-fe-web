import { cn } from "@/lib/utils"

import { drinkSchemaOutput } from "@server/schema/drink.schema"
import { useRouter } from "next/navigation"
import DrinkMaker from "./DrinkMaker/DrinkMaker"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card"

type CardProps = React.ComponentProps<typeof Card>

const RecipeCard = ({ className, drink, ...props }:
  CardProps & { drink: drinkSchemaOutput }) => {
  const router = useRouter()

  return (
    <Card
      className={
        cn("bg-background recipe-card w-[384px] max-w-[90%] \
         pt-12 cursor-pointer",
          className)}
      {...props}
      onClick={() => { router.push(`/drinks/${drink.slug}`) }}
    >
      <CardContent className="flex justify-center gap-4">
        <div className="h-[320px] flex 
                        flex-col justify-end relative">
          <DrinkMaker drink={drink} showShadow={true} thumbnail={true} />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 text-center mt-6 
                              relative z-10">
        <CardTitle>{drink.name}</CardTitle>
        <CardDescription className="h-5">
          {drink.drinkCategory?.name}
        </CardDescription>
      </CardFooter>
    </Card>
  )
}

export default RecipeCard
