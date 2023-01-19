import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Table from "./components/Table.jsx";

const baseUrl = "https://63c967ae904f040a965d7c84.mockapi.io/tasks";

function App() {
  const [checkedTasks, setCheckedTasks] = useState([])
  // const [tasksArr, setTasksArr] = useState({});
  // useEffect(() => {
  //   axios
  //     .get(baseUrl)
  //     .then((res) => {
  //       setTasksArr(res.data)
  //     })
  //     .catch((err) => console.log(err));
  //   // setTasksArr(tasks)
  //   // console.log(tasksArr)
  // }, []);

  return (
    <main className="mx-5">
      <Table checkedTasks={checkedTasks} setCheckedTasks={setCheckedTasks}/>
    </main>
  );
}

export default App;
