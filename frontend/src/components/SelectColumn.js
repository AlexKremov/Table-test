import React from "react";

export default function SelectColumn({ handleChangeColumn }) {
  const handleChange = (event) => {
    handleChangeColumn(event.target.value);
  };

  return (
    <div className="filter-item">
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={handleChange}
      >
        <option>Выберите колонку</option>
        <option value="date">Дата</option>
        <option value="name">Название</option>
        <option value="qty">Колличество</option>
        <option value="distance">Расстояние</option>
      </select>
    </div>
  );
}
