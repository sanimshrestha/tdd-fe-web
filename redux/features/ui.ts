import { drinkSchemaOutput } from "@server/schema/drink.schema";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type uiState = {
  recentDrinks: {
    name: string;
    slug: string;
    ingredients: string[];
  }[];
  feedbackDialogOpen: boolean;
  commandDialogOpen: boolean;
};

const initialState: uiState = {
  recentDrinks: [],
  feedbackDialogOpen: false,
  commandDialogOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setRecentDrink: (state, action: PayloadAction<drinkSchemaOutput>) => {
      const slugIndex = state.recentDrinks
        .map((drink) => drink.slug)
        .indexOf(action.payload.slug);
      if (slugIndex !== -1) {
        state.recentDrinks.splice(slugIndex, 1);
      }
      state.recentDrinks.unshift({
        name: action.payload.name,
        slug: action.payload.slug,
        ingredients: action.payload.ingredients.map(
          (ingredient) => ingredient.name
        ),
      });
      if (state.recentDrinks.length > 3) {
        state.recentDrinks.pop();
      }
    },
    setFeedbackDialogOpen: (state, action: PayloadAction<boolean>) => {
      state.feedbackDialogOpen = action.payload;
    },
    setCommandDialogOpen: (state, action: PayloadAction<boolean>) => {
      state.commandDialogOpen = action.payload;
    },
  },
});
export const { 
  setRecentDrink, 
  setFeedbackDialogOpen, 
  setCommandDialogOpen } = uiSlice.actions;
export default uiSlice.reducer;
