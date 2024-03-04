import { cn } from "@/lib/utils"

import { drinkSchemaOutput } from "@server/schema/drink.schema"
import DrinkMaker from "./DrinkMaker/DrinkMaker"
import { useRouter } from "next/navigation"
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
        cn("recipe-card w-[384px] max-w-[90%] pt-6 cursor-pointer",
          className)}
      {...props}
      onClick={() => { router.push(`/drinks/${drink.slug}`) }}
    >
      <CardContent className="flex justify-center gap-4">
        <div className="h-[320px] max-w-[200px] flex 
                        flex-col justify-end relative">
          <DrinkMaker drink={drink} thumbnail={true} />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 text-center">
        <CardTitle>{drink.name}</CardTitle>
        <CardDescription className="h-5">
          {drink.drinkCategory?.name}
        </CardDescription>
      </CardFooter>
    </Card>
  )
}

export default RecipeCard
