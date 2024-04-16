import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setCurrentDrink } from "./drinks";

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
    setFeedbackDialogOpen: (state, action: PayloadAction<boolean>) => {
      state.feedbackDialogOpen = action.payload;
    },
    setCommandDialogOpen: (state, action: PayloadAction<boolean>) => {
      state.commandDialogOpen = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(setCurrentDrink, (state, action) => {
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
    });
  },
});
export const { 
  setFeedbackDialogOpen, 
  setCommandDialogOpen } = uiSlice.actions;
export default uiSlice.reducer;
