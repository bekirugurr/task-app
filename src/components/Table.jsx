import { useState, useEffect, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import NumberSelectBox from "./NumberSelectBox";
import Pegination from "./Pegination";
import TableRow from "./TableRow";

const Table = ({ isTableVisible }) => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [howManyRowWillBeShown, setHowManyRowWillBeShown] = useState(10);
  const [selectedPage, setSelectedPage] = useState(1);
  //! Üstteki üç state ismiyle kendini açıkladığı için onları açıklamıyorum. Table'da bütün rowları göstermiyoruz. Kullanıcı tek seferde kaç satır görmek isterse (howManyRowWillBeShown) ve oluşan sayfalardan hangisini seçtiyse (selectedPage) bu iki değişkene göre tasklardan belirlediklerin görüyor. Aşağıdaki 'tasksToDisplay' bunun için tanımlandı. Ve aşağıda useEffect ile bu iki değişkene göre içeriği dolduruluyor.
  const [tasksToDisplay, setTasksToDisplay] = useState([]);
  const { allTasks, setCheckedTasks } = useContext(TaskContext);

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
    <div
      className={`mx-1 mx-lg-5 mt-4 border border-1 rounded ${
        !isTableVisible && "d-none"
      }`}
    >
      <table className="table table-striped">
        <thead>
          <tr className="border-bottom border-2 border-dark">
            <th className="border border-1 ps-md-3" style={{ width: "3rem" }}>
              <input
                type="checkbox"
                onChange={(e) => {
                  handleAllCheck(e);
                }}
                style={{ width: "1rem", height: "1rem" }}
              />
            </th>
            <th className="border border-1 text-center">Task Id</th>
            <th className="border border-1 text-center">Project Name</th>
            <th className="border border-1 text-center">Task Name</th>
            <th className="border border-1 text-center">Status</th>
            <th className="border border-1 text-center">Update</th>
          </tr>
        </thead>
        <tbody>
          {tasksToDisplay.map((task) => (
            <TableRow key={task.id} task={task} />
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
