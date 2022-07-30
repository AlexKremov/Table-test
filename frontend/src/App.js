import "./index.css";
import React from "react";
import TableRow from "./components/TableRow";
import Filters from "./components/Filters";
import { getItems } from "./api/queries";
import { useItems } from "./hooks/useItems"
import items from './init/items.json'

function App() {
  const { data } = useItems();

  const bd = data.map((el) => Object.values(el))
  console.log(bd)

  return (
    <div className="container">
      <Filters />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="container__col col">
              Дата
              <a href="#">
                <img src="/sort-down-icon.svg" />
              </a>
              <a href="#">
                <img src="/sort-up-icon.svg" />
              </a>
            </th>
            <th scope="container__col col">
              Название
              <a href="#">
                <img src="/sort-down-icon.svg" />
              </a>
              <a href="#">
                <img src="/sort-up-icon.svg" />
              </a>
            </th>
            <th scope="container__col col">
              Колличество
              <a href="#">
                <img src="/sort-down-icon.svg" />
              </a>
              <a href="#">
                <img src="/sort-up-icon.svg" />
              </a>
            </th>
            <th scope="container__col col">
              Расстояние
              <a href="#">
                <img src="/sort-down-icon.svg" />
              </a>
              <a href="#">
                <img src="/sort-up-icon.svg" />
              </a>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <TableRow
                key={item.id}
                name={item.name}
                data={item.data}
                qty={item.qty}
                distance={item.distance}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
