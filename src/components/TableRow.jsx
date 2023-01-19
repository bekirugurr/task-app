
const TableRow = ({
  id,
  project_name,
  task_name,
  status,
  setCheckedTasks, 
  checkedTasks
}) => {

    const handleClick = (e) => {
        setCheckedTasks([...checkedTasks, id]);
        if (!e.target.checked) {
            setCheckedTasks(checkedTasks.filter((task) => id !== task));
        }
      };

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          onChange={(e)=>handleClick(e)}
          checked={checkedTasks.includes(id)}
        />
      </td>
      <td>{id}</td>
      <td>{project_name}</td>
      <td>{task_name}</td>
      <td>{status}</td>
    </tr>
  );
};

export default TableRow;
