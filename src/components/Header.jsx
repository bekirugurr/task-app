import axios from "axios";
import React from "react";
import DeleteButtonAndModal from "./DeleteButtonAndModal";

const Header = ({
  isTableVisible,
  setIsTableVisible,
  checkedTasks,
  fetchData,
}) => {

  const deleteAndFetch = () => {
    axios
      .all(
        checkedTasks.map((taskId) =>
          axios.delete(
            `https://63c967ae904f040a965d7c84.mockapi.io/tasks/${taskId}`
          )
        )
      )
      .then(
        axios.spread((...responses) => {
          console.log("SELECTED RECORDS DELETED");
        })
      )
      .then(() => {
        fetchData();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mx-5 mt-4">
      <button
        className="me-3 border-0 rounded text-light pb-2 pt-1"
        style={{ width: "7rem", backgroundColor: "#662ba1" }}
        onClick={() => setIsTableVisible(!isTableVisible)}
      >
        {isTableVisible ? "Hide" : "Show"} Tasks
      </button>
      {/* {checkedTasks.length !== 0 && (
        <button
          className="border-0 rounded text-light pb-2 pt-1"
          style={{ width: "5rem", backgroundColor: "#662ba1" }}
          onClick={deleteAndFetch}
        >
          Delete
        </button>
      )} */}
      {checkedTasks.length !== 0 && <DeleteButtonAndModal handleDelete={deleteAndFetch} checkedTasks={checkedTasks}/>}

    </div>
  );
};

export default Header;
