import { useState } from "react";
import tasks from "../myArr.json";
import TableRow from "./TableRow";

const Table = ({ tasksArr, setCheckedTasks, checkedTasks }) => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const handleAllCheck = (e) => {
    setIsAllChecked(!isAllChecked);
    setCheckedTasks(tasks.map((task) => task.id));
    if (isAllChecked) setCheckedTasks([]);
  };


  console.log('checkedTasks :>> ', checkedTasks);
  return (
    <div className="my-5 border border-1 rounded">
      <table className="table table-striped ps-2">
        <thead>
          <tr className="border-bottom border-2 border-dark">
            <th>
              <input
                type="checkbox"
                onChange={(e) => {
                  handleAllCheck(e);
                }}
              />
            </th>
            <th>Task Id</th>
            <th>Project Name</th>
            <th>Task Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TableRow
              key={task.id}
              {...task}
              setCheckedTasks={setCheckedTasks}
              checkedTasks={checkedTasks}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
