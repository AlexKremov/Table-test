import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./itemsSlice";
import filtersReducer from "./FiltersSlice"

export default configureStore({
  reducer: { items: itemsReducer, filters: filtersReducer },
});
