import SelectColumn from "./SelectColumn";
import InputFilter from "./InputFilter";
import { useItems } from "../hooks/useItems";
import SelectType from "./SelectType";

const Filters = () => {
  const { handleChangeInput, handleChangeType, handleChangeColumn } = useItems()
  return (
    <div className="filters">
      <SelectColumn handleChangeColumn={handleChangeColumn}/>
      <SelectType handleChangeType={handleChangeType} />
      <InputFilter handleChangeInput={handleChangeInput}/>
    </div>
  );
};
export default Filters;
