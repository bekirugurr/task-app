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
      <td className="border border-1 ps-md-3" style={{ width: "3rem" }}>
        <input
          type="checkbox"
          onChange={(e) => handleClick(e)}
          checked={checkedTasks.includes(task.id)}
          style={{ width: "1rem", height: "1rem" }}
        />
      </td>
      <td className="border border-1 px-0 px-sm-2">{task.id}</td>
      <td className="border border-1 ps-0 pe-1 px-sm-2">{task.project_name}</td>
      <td className="border border-1 ps-0 pe-1 px-sm-2">{task.task_name}</td>
      <td className="border border-1 ps-0 pe-1 px-sm-2">{task.status}</td>
      <td
        className="border border-1 text-center"
        style={{ paddingTop: "5px", paddingBottom: "5px" }}
      >
        {checkedTasks.includes(task.id) && (
          <CreateOrUpdateTask isCreateOrUpdate="update" task={task} />
        )}
      </td>
    </tr>
  );
};

export default TableRow;
