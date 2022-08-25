import { configureStore } from "@reduxjs/toolkit";
import Filters from "./Filters";
import Pagination from "./Pagination";

const store = configureStore({
  reducer: {
    filters: Filters,
    pagination: Pagination,
  },
});

export default store;
