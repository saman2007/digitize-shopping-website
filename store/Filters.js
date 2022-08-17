import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    productsSortFilter: "محبوب ترین محصول",
    productsFilters: ["تلفن همراه"],
    brandsFilter: [],
    brandColors: [],
    price: { min: 20_000_000, max: 100_000_000 },
  },
  reducers: {
    changeProductsSort: (state, action) => {
      state.productsSortFilter = action.payload;
    },
    addFilter: (state, action) => {
      state[action.payload.type].push(action.payload.data);
    },
    deleteFilter: (state, action) => {
      const index = state[action.payload.type].findIndex(
        (data) => data === action.payload.data
      );
      index !== -1 && state[action.payload.type].splice(index, 1);
    },
    changePrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const filtersActions = filtersSlice.actions;
export default filtersSlice.reducer;
