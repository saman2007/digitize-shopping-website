import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    productsSortFilter: "محبوب ترین محصول",
    productsFilters: ["تلفن همراه"],
    brandsFilter: ["all"],
    brandColors: ["all"],
    price: { min: 13_000_000, max: 31_000_000 },
    allAvailableColors: [],
  },
  reducers: {
    changeFilter: (state, action) => {
      state[action.payload.type] = action.payload.datas;
    },
    addFilter: (state, action) => {
      state[action.payload.type].includes("all") &&
        state[action.payload.type].splice(0, 1);
      state[action.payload.type].push(action.payload.data);
    },
    deleteFilter: (state, action) => {
      const index = state[action.payload.type].findIndex(
        (data) => data === action.payload.data
      );
      index !== -1 && state[action.payload.type].splice(index, 1);
      action.payload.addAll && state[action.payload.type].push("all");
    },
    changePrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const filtersActions = filtersSlice.actions;
export default filtersSlice.reducer;
