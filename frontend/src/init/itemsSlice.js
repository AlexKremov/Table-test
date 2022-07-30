import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    data: [],
  },
  reducers: {},
});

export const {} = itemsSlice.actions;

export default itemsSlice.reducer;
