import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Character } from "../../utils/types";

interface FavoritesState {
  list: Character[];
}

const initialState: FavoritesState = {
  list: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<Character>) {
      if (!state.list.find((c) => c.id === action.payload.id)) {
        state.list.push(action.payload);
      }
    },
    removeFavorite(state, action: PayloadAction<number>) {
      state.list = state.list.filter((c) => c.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
