import "./index.css";
import React from "react";
import Table from "./components/Table";
import Filters from "./components/Filters";
import { useItems } from "./hooks/useItems";
import Pagination from "./components/Pagination";

function App() {
  const { data, handleSort } = useItems();

  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(3);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItem = data.slice(firstItemIndex, lastItemIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => {
    if (currentPage > Math.ceil(totalItems / itemsPerPage)) {
      setCurrentPage(Math.ceil(totalItems / itemsPerPage));
    } if (currentPage < Math.ceil(totalItems / itemsPerPage)) {
    setCurrentPage((prev) => prev + 1);
    }
  };
  const prevPage = () => {
    if (currentPage < 1) {
      setCurrentPage(1);
    } if (currentPage > 1) {
    setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="container">
      <Filters />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="container__col col">Дата</th>
            <th scope="container__col col">
              Название
              <a
                href="#"
                onClick={(e) => {
                  handleSort("name", "down");
                }}
              >
                <img src="/sort-down-icon.svg" alt="down" />
              </a>
              <a
                href="#"
                onClick={(e) => {
                  handleSort("name", "up");
                }}
              >
                <img src="/sort-up-icon.svg" alt="up" />
              </a>
            </th>
            <th scope="container__col col">
              Колличество
              <a
                href="#"
                onClick={(e) => {
                  handleSort("qty", "down");
                }}
              >
                <img src="/sort-down-icon.svg" alt="down" />
              </a>
              <a
                href="#"
                onClick={(e) => {
                  handleSort("qty", "up");
                }}
              >
                <img src="/sort-up-icon.svg" alt="up" />
              </a>
            </th>
            <th scope="container__col col">
              Расстояние
              <a
                href="#"
                onClick={(e) => {
                  handleSort("distance", "down");
                }}
              >
                <img src="/sort-down-icon.svg" alt="down" />
              </a>
              <a
                href="#"
                onClick={(e) => {
                  handleSort("distance", "up");
                }}
              >
                <img src="/sort-up-icon.svg" alt="up" />
              </a>
            </th>
          </tr>
        </thead>
        <Table data={currentItem} />
      </table>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        paginate={paginate}
      />

      <button className="btn btn-primary" onClick={prevPage}>
        Prev Page
      </button>
      <button className="btn btn-primary ms-3" onClick={nextPage}>
        Next Page
      </button>
      <select
        className="form-select rows"
        aria-label="Default select example"
        onChange={(e) => {
          setItemsPerPage(e.target.value);
        }}
      >
        <option>3</option>
        <option>5</option>
        <option>10</option>
        <option>{data.length}</option>
      </select>
    </div>
  );
}

export default App;
