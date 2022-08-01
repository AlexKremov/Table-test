import { createSlice } from "@reduxjs/toolkit";

const SortByNameDown = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

const SortByNameUp = (a, b) => {
  if (a.name > b.name) {
    return -1;
  }
  if (a.name < b.name) {
    return 1;
  }
  return 0;
};
const SortByQtyDown = (a, b) => {
  if (Number(a.qty) < Number(b.qty)) {
    return -1;
  }
  if (Number(a.qty) > Number(b.qty)) {
    return 1;
  }
  return 0;
};

const SortByQtyUp = (a, b) => {
  if (Number(a.qty) > Number(b.qty)) {
    return -1;
  }
  if (Number(a.qty) < Number(b.qty)) {
    return 1;
  }
  return 0;
};
const SortByDistanceDown = (a, b) => {
  if (Number(a.distance) < Number(b.distance)) {
    return -1;
  }
  if (Number(a.distance) > Number(b.distance)) {
    return 1;
  }
  return 0;
};

const SortByDistanceUp = (a, b) => {
  if (Number(a.distance) > Number(b.distance)) {
    return -1;
  }
  if (Number(a.distance) < Number(b.distance)) {
    return 1;
  }
  return 0;
};

export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    data: [],
    filterData: [],
  },

  reducers: {
    filterByField: (state, action) => {
      const [column, type, input] = Object.values(action.payload);
      if (column === "qty") {
        if (type === "over") {
          state.data = state.filterData.filter((a) => {
            return Number(a.qty) > Number(input);
          });
        }
        if (type === "less") {
          state.data = state.filterData.filter((a) => {
            return Number(a.qty) < Number(input);
          });
        }
        if (type === "equals") {
          state.data = state.filterData.filter((a) => {
            return Number(a.qty) === Number(input);
          });
        }
        if (type === "includes") {
          state.data = state.filterData.filter((a) => {
            return a.qty.toString().includes(input.toString());
          });
        }
      }
      if (column === "distance") {
        if (type === "over") {
          state.data = state.filterData.filter((a) => {
            return Number(a.distance) > Number(input);
          });
        }
        if (type === "less") {
          state.data = state.filterData.filter((a) => {
            return Number(a.distance) < Number(input);
          });
        }
        if (type === "equals") {
          state.data = state.filterData.filter((a) => {
            return Number(a.distance) === Number(input);
          });
        }
        if (type === "includes") {
          state.data = state.filterData.filter((a) => {
            return a.distance.toString().includes(input.toString());
          });
        }
      }
      if (column === "name") {
        if (type === "over") {
          state.data = state.filterData.filter((a) => {
            return a.name.toLowerCase() > input.toLowerCase();
          });
        }
        if (type === "less") {
          state.data = state.filterData.filter((a) => {
            return a.name.toLowerCase() < input.toLowerCase();
          });
        }
        if (type === "equals") {
          state.data = state.filterData.filter((a) => {
            return a.name.toLowerCase() === input.toLowerCase();
          });
        }
        if (type === "includes") {
          state.data = state.filterData.filter((a) => {
            return a.name
              .toLowerCase()
              .includes(input.toString().toLowerCase());
          });
        }
      }
      if (column === "date") {
        if (type === "over") {
          state.data = state.filterData.filter((a) => {
            return new Date(a.date) > new Date(input);
          });
        }
        if (type === "less") {
          state.data = state.filterData.filter((a) => {
            return new Date(a.date) < new Date(input);
          });
        }
        if (type === "equals") {
          state.data = state.filterData.filter((a) => {
            return new Date(a.date) === new Date(input);
          });
        }
        if (type === "includes") {
          state.data = state.filterData.filter((a) => {
            return a.date
              .toLowerCase()
              .includes(input.toString().toLowerCase());
          });
        }
      }
    },

    sortByField: (state, action) => {
      const { name, value } = action.payload;
      if (name === "qty") {
        if (value === "down") {
          state.data = state.data.sort(SortByQtyDown);
        } else {
          state.data = state.data.sort(SortByQtyUp);
        }
      }

      if (name === "distance") {
        if (value === "down") {
          state.data = state.data.sort(SortByDistanceDown);
        } else {
          state.data = state.data.sort(SortByDistanceUp);
        }
      }
      if (name === "name") {
        if (value === "down") {
          state.data = state.data.sort(SortByNameDown);
        } else {
          state.data = state.data.sort(SortByNameUp);
        }
      }
    },
    setData: (state, action) => {
      state.data = action.payload;
      state.filterData = action.payload;
    },
  },
});

export const { setData, sortByField, filterByField } = itemsSlice.actions;

export default itemsSlice.reducer;
