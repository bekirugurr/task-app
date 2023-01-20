import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Table from "./components/Table.jsx";
import Header from "./components/Header";

const baseURL = "https://63c967ae904f040a965d7c84.mockapi.io/tasks";

function App() {
  const [checkedTasks, setCheckedTasks] = useState([]);
  const [isTableVisible, setIsTableVisible] = useState(true);
  const [allTasks, setAllTasks] = useState([]);

  const fetchData = () => {
    axios
      .get(baseURL)
      .then((res) => {
        setAllTasks(res.data);
      })
      .catch((err) => console.log(err));
      console.log('DATA FETCHED')
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="mx-5">
      <Header
        isTableVisible={isTableVisible}
        setIsTableVisible={setIsTableVisible}
        checkedTasks={checkedTasks}
        fetchData={fetchData}
      />
      {/*//! Aşağıda isTableVisible'ı  prop olarak göndermeden burada da {isTableVisible && <Table/>} şeklinde conditional rendering yapabilirdim. Ama o zaman her hide/show işleminde seçili satırlar, belirlediğimiz tabloda bir seferde kaç satır gözükeceği ve kaçıncı tablo sayfası gözükeceği seçimleri siliniyor. Bunu engelemek için isTableVisible'ı  prop olarak gönderdim */}
      <Table
        checkedTasks={checkedTasks}
        setCheckedTasks={setCheckedTasks}
        isTableVisible={isTableVisible}
        allTasks={allTasks}
      />
    </main>
  );
}

export default App;
