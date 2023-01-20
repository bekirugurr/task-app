import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Table from "./components/Table.jsx";
import Header from "./components/Header";

const baseUrl = "https://63c967ae904f040a965d7c84.mockapi.io/tasks";

function App() {
  const [checkedTasks, setCheckedTasks] = useState([]);
  const [isTableVisible, setIsTableVisible] = useState(false);

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
      <Header
        isTableVisible={isTableVisible}
        setIsTableVisible={setIsTableVisible}
      />
      {/*//! Aşağıda isTableVisible'ı  prop olarak göndermeden burada da {isTableVisible && <Table/>} şeklinde conditional rendering yapabilirdim. Ama o zaman her hide/show işleminde seçili satırlar, belirlediğimiz tabloda bir seferde kaç satır gözükeceği ve kaçıncı tablo sayfası gözükeceği seçimleri siliniyor. Bunu engelemek için isTableVisible'ı  prop olarak gönderdim */}
      <Table
        checkedTasks={checkedTasks}
        setCheckedTasks={setCheckedTasks}
        isTableVisible={isTableVisible}
      />
    </main>
  );
}

export default App;
