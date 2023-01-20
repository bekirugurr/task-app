import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const TaskContext = createContext();

export const TaskProvider = (props) => {
  //! allTasks'ın içine API'den çekilecek bütün taskları koydum
  const [allTasks, setAllTasks] = useState([]);

  //! checkedTasks tekil veya çoğul olarak tick konun taskların id'lerinden oluşan bir array
  const [checkedTasks, setCheckedTasks] = useState([]);

  //! API'den toplu olarak bütün taskları çekiyor. Aşağıda useEffect() ile componentDidMount olduğunda çektiği gibi herhangi bir update, create ve delete işlemi olduğunda da bu function'u call ettim
  const fetchData = () => {
    axios
      .get("https://63c967ae904f040a965d7c84.mockapi.io/tasks")
      .then((res) => {
        setAllTasks(res.data);
      })
      .catch((err) => console.log(err));
    console.log("DATA FETCHED");
  };

  useEffect(() => {
    fetchData();
  }, []);

  //! deleteAndFetch'i seçili task(ler)i silmek ve daha sonrasında veriyi yeniden çekmek için kullandım. Bu function'ı sadece bir yerde kullandım. Orada da tanımlayabilirdim. Ama orada tanımlasaydım tanımda kullandığım checkedTasks, fetchData, setCheckedTasks state ve functionlarını çağıracaktım. Onları orada çağırmamak için bu function'u burada tanımladım sadece bunu çağırdım. Hem böyle yaparak UI'ı sade tuttum
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
        setCheckedTasks([]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <TaskContext.Provider
      value={{
        allTasks,
        setAllTasks,
        checkedTasks,
        setCheckedTasks,
        fetchData,
        deleteAndFetch,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
