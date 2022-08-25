import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    currentPage: 1,
  },
  reducers: {
    goPrevPage: (state) => {
      state.currentPage--;
    },
    goNextPage: (state) => {
      state.currentPage++;
    },
    goToPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const paginationAction = paginationSlice.actions;
export default paginationSlice.reducer;
