import { createSlice } from "@reduxjs/toolkit";
import data from './items.json'

export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    data: data,
  },
  reducers: {},
});

export const {} = itemsSlice.actions;

export default itemsSlice.reducer;
