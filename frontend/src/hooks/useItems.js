import React from "react";
import { useSelector, useDispatch } from "react-redux";
import getItems from "../api/queries";

export function useItems() {
  const { data } = useSelector((state) => state.items);
  const dispatch = useDispatch();

  React.useEffect(() => {
  }, [dispatch]);

  return { data };
}
