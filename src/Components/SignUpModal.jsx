import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import SignUpForm from "./SignUpForm";

function SignUpModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="light" value="logIn" onClick={handleShow} >Зарегистироваться</Button>{' '}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Зарегистрироваться</Modal.Title>
                </Modal.Header>
                <Modal.Body><SignUpForm/></Modal.Body>
            </Modal>
        </>
    );
}
export default SignUpModal;