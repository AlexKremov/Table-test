import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    columnFilter: "",
    typeFilter: "",
    inputFilter: "",
  },

  reducers: {
    setFilterValue: (state, action) => {
      const { column, value} = action.payload;
      state[column] = value;
    },
  },
});
export const { setFilterValue } = filtersSlice.actions;
export default filtersSlice.reducer;
