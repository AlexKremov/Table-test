import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItems } from "../api/queries";
import { filterByField, setData, sortByField } from "../init/itemsSlice";
import { setFilterValue } from "../init/FiltersSlice";

export function useItems() {
  const { data } = useSelector((state) => state.items);
  const filters = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  const handleSort = (name, value) => {
    dispatch(sortByField({ name, value }));
  };

  React.useEffect(() => {
    dispatch(filterByField(filters));
  }, [filters]);

  React.useEffect(() => {
    getItems().then((res) => {
      dispatch(setData(res.data));
    });
  }, [dispatch]);

  const handleChangeColumn = (value) => {
    dispatch(setFilterValue({ column: "columnFilter", value }));
  };

  const handleChangeType = (value) => {
    dispatch(setFilterValue({ column: "typeFilter", value }));
  };
  const handleChangeInput = (value) => {
    dispatch(setFilterValue({ column: "inputFilter", value }));
  };

  return {
    data,
    handleSort,
    handleChangeColumn,
    handleChangeInput,
    handleChangeType,
  };
}
