import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Character } from "../../utils/types";
import type { RootState } from "../store";
import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api/character";

interface CharactersState {
  all: Character[];
  filtered: Character[];
  selected: Character | null;
  loading: boolean;
  error: string | null;
  filters: {
    name: string;
    species: string[];
    gender: string[];
    status: string[];
    order: "asc" | "desc" | null;
  };
  currentPage: number;
  itemsPerPage: number;
  viewMode: "all" | "favorites";
}

const initialState: CharactersState = {
  all: [],
  filtered: [],
  selected: null,
  loading: false,
  error: null,
  filters: {
    name: "",
    species: [],
    gender: [],
    status: [],
    order: null,
  },
  currentPage: 1,
  itemsPerPage: 20,
  viewMode: "all",
};

export const fetchCharacters = createAsyncThunk(
  "characters/fetchAll",
  async () => {
    const firstPage = await axios.get(API_URL);
    const totalPages = firstPage.data.info.pages;
    const allCharacters = [...firstPage.data.results];

    const requests = [];
    for (let i = 2; i <= totalPages; i++) {
      requests.push(axios.get(`${API_URL}?page=${i}`));
    }

    const responses = await Promise.all(requests);
    responses.forEach((res) => {
      allCharacters.push(...res.data.results);
    });

    return allCharacters;
  }
);

export const fetchCharacterById = createAsyncThunk(
  "characters/fetchById",
  async (id: number) => {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
  }
);

const applyFilters = (
  characters: Character[],
  filters: CharactersState["filters"]
) => {
  let result = [...characters];
  const { name, species, gender, status, order } = filters;

  if (name) {
    result = result.filter((c) =>
      c.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (species.length) {
    result = result.filter((c) => species.includes(c.species.toLowerCase()));
  }

  if (gender.length) {
    result = result.filter((c) => gender.includes(c.gender.toLowerCase()));
  }

  if (status.length) {
    result = result.filter((c) => status.includes(c.status.toLowerCase()));
  }

  if (order === "asc") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  } else if (order === "desc") {
    result.sort((a, b) => b.name.localeCompare(a.name));
  }

  return result;
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<CharactersState["filters"]>) {
      state.filters = action.payload;
      state.filtered = applyFilters(state.all, state.filters);
      state.currentPage = 1;
    },
    resetFilters(state) {
      state.filters = initialState.filters;
      state.filtered = state.all;
      state.currentPage = 1;
    },
    setNameFilter(state, action: PayloadAction<string>) {
      state.filters.name = action.payload;
      state.filtered = applyFilters(state.all, state.filters);
      state.currentPage = 1;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setViewMode(state, action: PayloadAction<"all" | "favorites">) {
      state.viewMode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.all = action.payload;
        state.filtered = applyFilters(action.payload, state.filters);
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error";
      })
      .addCase(fetchCharacterById.fulfilled, (state, action) => {
        state.selected = action.payload;
      });
  },
});

export const {
  setFilters,
  resetFilters,
  setNameFilter,
  setCurrentPage,
  setViewMode,
} = charactersSlice.actions;

export const selectPaginatedCharacters = (state: RootState) => {
  const { currentPage, itemsPerPage, filtered } = state.characters;
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filtered.slice(start, end);
};

export default charactersSlice.reducer;
