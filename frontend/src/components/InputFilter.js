export default function InputFilter({ handleChangeInput }) {
    const handleChange = (event) => {
        handleChangeInput(event.target.value);
    };
  
    return (
        <div className="filter-item">
        <input type="text" className="form-control" onChange={handleChange}/>
      </div>
    );
  }