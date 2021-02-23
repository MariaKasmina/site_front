import React from "react";
import {Button, Modal} from 'react-bootstrap'
import { useState } from 'react';
import AuthorisationForm from "./AuthorisationForm";
import SignUpModal from "./SignUpModal";


/**
 * Компонент поп-ап для авторизации, который открывается после нажатия на кнопку Войти на главной
 */
function LogInModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className='mr-1 login-button' variant="light" value="logIn" onClick={handleShow}>Войти</Button>{' '}
            <SignUpModal/>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Войти в учетную запись</Modal.Title>
                </Modal.Header>
                <Modal.Body><AuthorisationForm/></Modal.Body>
            </Modal>
        </>
    );
}
export default LogInModal;