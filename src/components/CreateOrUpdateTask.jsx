import React, { useEffect, useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { TaskContext } from "../Context/TaskContext";

const initialValues = {
  id: "",
  project_name: "",
  task_name: "",
  status: "Not Started",
};

//! Hem create hem update için bu component'ı kullandım. Ayrı ayrı kullansam bu component biraz daha kısa olurdu. Ama reusebility için iki operasyon için tek component kullandım.
//! Create yapmak istediğimde isCreateOrUpdate prop'unu 'create' olarak gönderdim, Update yapmak istediğimde isCreateOrUpdate prop'unu 'update' olarak gönderdim

const CreateOrUpdateTask = ({ isCreateOrUpdate, task }) => {
  const [show, setShow] = useState(false);
  const [taskValues, setTaskValues] = useState(initialValues);
  const { fetchData } = useContext(TaskContext);


  //! Eğer yaptığım işlem update ise compenent render olduğunda doğrudan update edilecek task'in verilerini state aktarıyor ve controllerd formun inputlarına basıyor
  useEffect(() => {
    if (isCreateOrUpdate === "update") {
      setTaskValues({
        id: task.id,
        project_name: task.project_name,
        task_name: task.task_name,
        status: task.status,
      });
    }
  }, [isCreateOrUpdate, task]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setTaskValues({ ...taskValues, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isCreateOrUpdate === "update") {
      let config = {
        method: "put",
        url: `https://63c967ae904f040a965d7c84.mockapi.io/tasks/${task.id}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: taskValues,
      };
      axios(config)
        .then((res) => {
          console.log(res.data);
          fetchData();
          setTaskValues(initialValues);
        })
        .then((res) => handleClose())
        .catch(function (error) {
          console.log(error);
        });
    } else {
      let config = {
        method: "post",
        url: "https://63c967ae904f040a965d7c84.mockapi.io/tasks",
        headers: {
          "Content-Type": "application/json",
        },
        data: taskValues,
      };
      axios(config)
        .then((res) => {
          console.log(res.data);
          fetchData();
          setTaskValues(initialValues);
        })
        .then((res) => handleClose())
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className={`btn btn-primary  ${
          isCreateOrUpdate === "create"
            ? "me-3 pb-2 pt-1 fw-semibold"
            : " my-0 pt-0 pb-1"
        }`}
        style={{ width: "7rem" }}
      >
        {isCreateOrUpdate[0].toUpperCase() + isCreateOrUpdate.slice(1)} Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <span className="px-3">
              {isCreateOrUpdate[0].toUpperCase() + isCreateOrUpdate.slice(1)}
              Task
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="d-flex-col mx-3" onSubmit={handleSubmit}>
            <Form.Group className="mb-4" controlId="formId">
              <Form.Label className="ps-1">
                <strong>Id: </strong>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter task id"
                name="id"
                value={taskValues.id}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formProjectName">
              <Form.Label className="ps-1">
                <strong>Project Name: </strong>
              </Form.Label>
              <Form.Control
                type="text"
                name="project_name"
                placeholder="Enter project name"
                value={taskValues.project_name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formTaskName">
              <Form.Label className="ps-1">
                <strong>Task Name: </strong>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task name"
                name="task_name"
                value={taskValues.task_name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label className="ps-1">
                <strong>Status: </strong>
              </Form.Label>
              <Form.Select
                name="status"
                value={taskValues.status}
                onChange={handleChange}
              >
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </Form.Select>
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button
                variant="primary"
                type="submit"
                className="border-0 rounded text-light pb-2 pt-1"
                style={{ width: "5rem" }}
              >
                {isCreateOrUpdate[0].toUpperCase() + isCreateOrUpdate.slice(1)}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default CreateOrUpdateTask;
