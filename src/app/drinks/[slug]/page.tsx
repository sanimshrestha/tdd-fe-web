import {
  DrinkType, IngredientsWithAmount,
  drinks, allingredients
} from "../../lib/mockdata";
import DrinkMaker from "@/app/ui/DrinkMaker/DrinkMaker";
import IngredientFooter from "./IngredientFooter";


const getDrinkAndIngredients = (slug: string):
  ({ drink?: DrinkType, ingredients?: IngredientsWithAmount[] }) => {
  const drink = drinks.find((d) => d.slug === slug);
  const ingredients = drink?.ingredients.map((i) => {
    const ingredient = allingredients.find((i_dash) => i_dash.id === i.id);
    return ingredient
      ? { ...ingredient, amount: i.amount, unit: i.unit }
      : null;
  });

  const filteredIngredients = ingredients
    ?.filter(Boolean) as IngredientsWithAmount[];

  return { drink, ingredients: filteredIngredients };
}

const Drink = ({ params }: { params: { slug: string } }) => {
  const { drink, ingredients } = getDrinkAndIngredients(params.slug);


  return (
    <div className="flex flex-col items-center justify-between">
      <section className="flex flex-col justify-center items-center">
        <h2 className="font-bold text-primary mb-4 text-xl 
                      leading-5 tracking-tighter">
          {drink?.name}
        </h2>
        <p className="text-secondary text-base leading-5 tracking-tight">
          {drink?.category}
        </p>
      </section>
      {drink && <DrinkMaker drink={drink} />}
      <IngredientFooter ingredients={ingredients} drink={drink} />
    </div>
  );
};


export default Drink;
