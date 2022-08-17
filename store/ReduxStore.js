import { configureStore } from "@reduxjs/toolkit";
import Filters from "./Filters";

const store = configureStore({
  reducer: {
    filters: Filters,
  },
});

export default store;
