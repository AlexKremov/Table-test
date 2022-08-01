const Table = (props) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return (
    <tbody>
      {props.data.map((item) => {
        return (
          <tr key={item.id}>
            <td>{new Date(item.date).toLocaleDateString("ru-RU", options)}</td>
            <td>{item.name}</td>
            <td>{Math.round(item.qty)}</td>
            <td>{Math.round(item.distance)}</td>
          </tr>
        );
      })}
    </tbody>
  );
};
export default Table;
