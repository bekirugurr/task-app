import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { TaskContext } from "../Context/TaskContext";

const DeleteButtonAndModal = ({ handleDelete }) => {
  const [show, setShow] = useState(false);
  const { deleteAndFetch } = useContext(TaskContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deleteAndCloseModel = () => {
    deleteAndFetch();
    handleClose();
  };

  return (
    <>
      <Button
        variant="danger"
        onClick={handleShow}
        className="fw-semibold mb-2 border-0 rounded text-light px-0  px-sm-2 pb-2 pt-1"
      >
        Delete Task
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="custom-modal-size"
        id="custom-delete-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title >
            Are you sure?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You are about to delete the selected tasks permanently...
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={deleteAndCloseModel}
            className="me-3 border-0 rounded text-light pb-2 pt-1"
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default DeleteButtonAndModal;
