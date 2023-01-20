import { useState, useEffect, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import NumberSelectBox from "./NumberSelectBox";
import Pegination from "./Pegination";
import TableRow from "./TableRow";

const Table = ({ isTableVisible }) => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [howManyRowWillBeShown, setHowManyRowWillBeShown] = useState(10);
  const [selectedPage, setSelectedPage] = useState(1);
  const [tasksToDisplay, setTasksToDisplay] = useState([]);
  const {allTasks, setCheckedTasks } = useContext(TaskContext)

  const handleAllCheck = (e) => {
    setIsAllChecked(!isAllChecked);
    setCheckedTasks(allTasks.map((task) => task.id));
    if (isAllChecked) setCheckedTasks([]);
  };

  useEffect(() => {
    const startRow = (selectedPage - 1) * howManyRowWillBeShown;
    const endRow = startRow + howManyRowWillBeShown;
    const newTasksArr = allTasks.slice(startRow, endRow);
    setTasksToDisplay(newTasksArr);
  }, [howManyRowWillBeShown, selectedPage, allTasks]);

  return (
    <div className={`mx-5 mt-4 border border-1 rounded ${!isTableVisible && 'd-none'}`}>
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
              task={task}
            />
          ))}
        </tbody>
      </table>
      <div className="d-flex flex-row ps-2 pb-1">
        <NumberSelectBox setHowManyRowWillBeShown={setHowManyRowWillBeShown} />
        <Pegination
          numberOfPages={Math.ceil(allTasks.length / howManyRowWillBeShown)}
          setSelectedPage={setSelectedPage}
          selectedPage={selectedPage}
        />
      </div>
    </div>
  );
};

export default Table;
