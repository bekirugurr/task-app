
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
      <td className="border border-1 ps-3" style={{width:'3rem'}}>
        <input
          type="checkbox"
          onChange={(e)=>handleClick(e)}
          checked={checkedTasks.includes(id)}
        />
      </td>
      <td className="border border-1">{id}</td>
      <td className="border border-1">{project_name}</td>
      <td className="border border-1">{task_name}</td>
      <td className="border border-1">{status}</td>
    </tr>
  );
};

export default TableRow;
