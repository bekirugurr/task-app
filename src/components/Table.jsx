import { useEffect } from "react";
import { useState } from "react";
import tasks from "../myArr.json";
import NumberSelectBox from "./NumberSelectBox";
import Pegination from "./Pegination";
import TableRow from "./TableRow";

const Table = ({ tasksArr, setCheckedTasks, checkedTasks }) => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [howManyRowWillBeShown, setHowManyRowWillBeShown] = useState(10);
  const [selectedPage, setSelectedPage] = useState(1);
  const [tasksToDisplay, setTasksToDisplay] = useState([]);

  const handleAllCheck = (e) => {
    setIsAllChecked(!isAllChecked);
    setCheckedTasks(tasks.map((task) => task.id));
    if (isAllChecked) setCheckedTasks([]);
  };

  useEffect(() => {
    const startRow = (selectedPage - 1) * howManyRowWillBeShown;
    const endRow = startRow + howManyRowWillBeShown;
    const newTasksArr = tasks.slice(startRow, endRow);
    setTasksToDisplay(newTasksArr);
  }, [howManyRowWillBeShown, selectedPage]);

  return (
    <div className="m-5 border border-1 rounded">
      <table className="table table-striped ps-2">
        <thead>
          <tr className="border-bottom border-2 border-dark">
            <th  className="border border-1 ps-3" style={{width:'3rem'}}>
              <input
                type="checkbox"
                onChange={(e) => {
                  handleAllCheck(e);
                }}
              />
            </th>
            <th className="border border-1">Task Id</th>
            <th className="border border-1">Project Name</th>
            <th className="border border-1">Task Name</th>
            <th className="border border-1">Status</th>
          </tr>
        </thead>
        <tbody>
          {tasksToDisplay.map((task) => (
            <TableRow
              key={task.id}
              {...task}
              setCheckedTasks={setCheckedTasks}
              checkedTasks={checkedTasks}
            />
          ))}
        </tbody>
      </table>
      <div className="d-flex flex-row ps-2 pb-1">
        <NumberSelectBox setHowManyRowWillBeShown={setHowManyRowWillBeShown} />
        <Pegination
          numberOfPages={Math.ceil(tasks.length / howManyRowWillBeShown)}
          setSelectedPage={setSelectedPage}
          selectedPage={selectedPage}
        />
      </div>
    </div>
  );
};

export default Table;
