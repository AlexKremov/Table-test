import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItems } from "../api/queries";
import { setData } from "../init/itemsSlice";

export function useItems() {
  const { data } = useSelector((state) => state.items);
  const dispatch = useDispatch();

  React.useEffect(() => {
    getItems().then((res) => {
      console.log(res.data)
      dispatch(setData(res.data))
    });
  }, [dispatch]);

  return { data };
}
