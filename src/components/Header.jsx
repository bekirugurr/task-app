import {useContext} from "react";
import { TaskContext } from "../Context/TaskContext";
import CreateOrUpdateTask from "./CreateOrUpdateTask";
import DeleteButtonAndModal from "./DeleteButtonAndModal";

const Header = ({
  isTableVisible,
  setIsTableVisible,
}) => {
  const {checkedTasks} = useContext(TaskContext);

  return (
    <div className="mx-5 mt-4">
      <button
        className="me-3 border-0 rounded text-light pb-2 pt-1"
        style={{ width: "7rem", backgroundColor: "#662ba1" }}
        onClick={() => setIsTableVisible(!isTableVisible)}
      >
        {isTableVisible ? "Hide" : "Show"} Tasks
      </button>
      <CreateOrUpdateTask isCreateOrUpdate={'create'}/>
      {checkedTasks.length !== 0 && <DeleteButtonAndModal/>}

    </div>
  );
};

export default Header;
