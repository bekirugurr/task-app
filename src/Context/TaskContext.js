import { createContext, useState, useEffect} from "react";
import axios from 'axios';

export const TaskContext = createContext();

export const TaskProvider = (props) => {
    const [checkedTasks, setCheckedTasks] = useState([]);
    const [allTasks, setAllTasks] = useState([]);
    const fetchData = () => {
        axios
          .get("https://63c967ae904f040a965d7c84.mockapi.io/tasks")
          .then((res) => {
            setAllTasks(res.data);
          })
          .catch((err) => console.log(err));
          console.log('DATA FETCHED')
      };

      useEffect(() => {
        fetchData();
      }, []);

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
            setCheckedTasks([])
          })
          .catch((err) => console.log(err));
      };
    
    return (
      <TaskContext.Provider value={{allTasks, setAllTasks, checkedTasks, setCheckedTasks, fetchData, deleteAndFetch }}>
        {props.children}
      </TaskContext.Provider>
    );
  };