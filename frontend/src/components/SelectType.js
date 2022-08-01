import React from "react";

export default function SelectType({ handleChangeType }) {
  const [type, setType] = React.useState("equals");
  const handleChange = (event) => {
    setType(event.target.value);
    handleChangeType(event.target.value);
  };

  return (
    <div className="filter-item">
      <select
        className="form-select"
        id="floatingSelect"
        aria-label="Floating label select example"
        onChange={handleChange}
        value={type}
      >
        <option value="over">Больше</option>
        <option value="equals">Равно</option>
        <option value="includes">Содержит</option>
        <option value="less">Меньше</option>
      </select>
    </div>
  );
}
