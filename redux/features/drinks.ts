import { drinkSchemaOutput, getAllDrinksOutput } 
from "@server/schema/drink.schema";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type drinksState = {
  drinks:string[]
  currentDrink : string
};

const initialState: drinksState = {
  drinks: [],
  currentDrink: "",
};

export const drinksSlice = createSlice({
  name: "drinks",
  initialState,
  reducers: {
    setDrinks: (state, action: PayloadAction<getAllDrinksOutput>) => {
      state.drinks = action.payload.map((drink) => drink.slug);
    },
    setCurrentDrink: (state, action: PayloadAction<drinkSchemaOutput>) => {
      state.currentDrink = action.payload.slug;
    },
  }
});
export const { setDrinks, setCurrentDrink } = drinksSlice.actions;
export default drinksSlice.reducer;
