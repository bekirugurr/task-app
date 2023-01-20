import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import CreateOrUpdateTask from "./CreateOrUpdateTask";

const TableRow = ({ task }) => {
  const { checkedTasks, setCheckedTasks } = useContext(TaskContext);

  const handleClick = (e) => {
    setCheckedTasks([...checkedTasks, task.id]);
    if (!e.target.checked) {
      setCheckedTasks(checkedTasks.filter((taskId) => task.id !== taskId));
    }
  };

  return (
    <tr>
      <td className="border border-1 ps-3" style={{ width: "3rem" }}>
        <input
          type="checkbox"
          onChange={(e) => handleClick(e)}
          checked={checkedTasks.includes(task.id)}
          style={{ width: "1rem", height: "1rem" }}
        />
      </td>
      <td className="border border-1">{task.id}</td>
      <td className="border border-1">{task.project_name}</td>
      <td className="border border-1">{task.task_name}</td>
      <td className="border border-1">{task.status}</td>
      <td
        className="border border-1 text-center"
        style={{ width: "10rem", paddingTop: "5px", paddingBottom: "5px" }}
      >
        {checkedTasks.includes(task.id) && (
          <CreateOrUpdateTask isCreateOrUpdate="update" task={task} />
        )}
      </td>
    </tr>
  );
};

export default TableRow;
