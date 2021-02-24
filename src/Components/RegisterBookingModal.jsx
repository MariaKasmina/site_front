import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import InputPersData from "./InputPersData";

/**
 * Компонент поп-ап для ввода ПД, после которого происходит окончательная покупка билета
 */

function RegisterBookingModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className='mr-1 login-button' variant="primary" value="logIn" onClick={handleShow}>Купить билет</Button>{' '}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Введите персональные данные</Modal.Title>
                </Modal.Header>
                <Modal.Body><InputPersData/></Modal.Body>
            </Modal>
        </>
    );
}
export default RegisterBookingModal;