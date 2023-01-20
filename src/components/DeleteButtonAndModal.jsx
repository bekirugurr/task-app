import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeleteButtonAndModal = ({checkedTasks, handleDelete}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deleteAndCloseModel = () => {
    handleDelete()
    handleClose()
  }
  

  return (
    <>
      <Button variant="danger" onClick={handleShow} className="me-3 border-0 rounded text-light pb-2 pt-1"
        style={{ width: "7rem"}}>
        Delete Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are about to delete the selected tasks permanently...</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={deleteAndCloseModel} className="me-3 border-0 rounded text-light pb-2 pt-1">
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default DeleteButtonAndModal;