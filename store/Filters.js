import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    productsSortFilter: "محبوب ترین محصول",
    productsFilters: ["تلفن همراه", "لپ تاپ", "ساعت هوشمند"],
    brandsFilter: ["all"],
    brandColors: ["all"],
    price: { min: 0, max: 0 },
    allAvailableColors: [],
    allAvailableBrands: [],
    allowedPrice: { min: 0, max: 0 },
    address: "",
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
    initializeFilters: (state, action) => {
      state.allAvailableColors = action.payload.colors;
      state.allAvailableBrands = action.payload.brands;
      state.allowedPrice = action.payload.price;
      state.price = action.payload.price;
    },
    changeAddress: (state, action) => {
      state.address = action.payload;
    },
    resetFilters: (state) => {
      state.price = state.allowedPrice;
      state.brandsFilter = ["all"];
      state.brandColors = ["all"];
      state.productsSortFilter = "محبوب ترین محصول";
      state.productsFilters = ["تلفن همراه", "لپ تاپ", "ساعت هوشمند"];
    },
  },
});

export const filtersActions = filtersSlice.actions;
export default filtersSlice.reducer;
