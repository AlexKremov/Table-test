const Filters = (props) => {
  return (
    <div className="filters">
      <div className="filter-item">
        <select className="form-select" aria-label="Default select example">
          <option selected>Выберите колонку</option>
          <option value="data">Дата</option>
          <option value="name">Название</option>
          <option value="qty">Колличество</option>
          <option value="distance">Расстояние</option>
        </select>
      </div>
      <div className="filter-item">
        <select
          className="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
        >
          <option value="over">Больше</option>
          <option value="equals" selected>
            Равно
          </option>
          <option value="includes">Содержит</option>
          <option value="less">Меньше</option>
        </select>
      </div>
      <div className="filter-item">
        <input type="text" className="form-control" />
      </div>
    </div>
  );
};
export default Filters;
