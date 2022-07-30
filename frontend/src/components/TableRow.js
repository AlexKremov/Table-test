const TableRow = (props) => {
  return (
    <tr key={props.id}>
      <td>{props.data}</td>
      <td>{props.name}</td>
      <td>{props.qty}</td>
      <td>{props.distance}</td>
    </tr>
  );
};
export default TableRow;
