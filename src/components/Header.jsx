import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import CreateOrUpdateTask from "./CreateOrUpdateTask";
import DeleteButtonAndModal from "./DeleteButtonAndModal";

const Header = ({ isTableVisible, setIsTableVisible }) => {
  const { checkedTasks } = useContext(TaskContext);

  return (
    <div className="mx-1 mx-lg-5 mt-4">
      <button
        className="me-1 me-md-3 mb-2 btn btn-primary text-light px-0 px-sm-2 pb-2 pt-1 fw-semibold"
        onClick={() => setIsTableVisible(!isTableVisible)}
      >
        {isTableVisible ? "Hide" : "Show"} Tasks
      </button>
      <CreateOrUpdateTask isCreateOrUpdate={"create"} />
      {checkedTasks.length !== 0 && <DeleteButtonAndModal />}
    </div>
  );
};

export default Header;
