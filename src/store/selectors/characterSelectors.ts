// store/selectors/charactersSelectors.ts
import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

export const selectCharactersState = (state: RootState) => state.characters;

export const selectPaginatedCharacters = createSelector(
  [selectCharactersState],
  (charactersState) => {
    const { currentPage, itemsPerPage, filtered } = charactersState;
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filtered.slice(start, end);
  }
);
