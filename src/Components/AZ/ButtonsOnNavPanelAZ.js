import React from "react";
import Cookies from "universal-cookie/es6";
import {Nav} from "react-bootstrap";

const cookies = new Cookies();

function ButtonsOnNavPanelAZ() {
    if (cookies.get('isLogged') === undefined && cookies.get('isSignUp') === undefined) {
        return (<Nav className="mr-auto">
            <Nav.Link href="/home">Главная</Nav.Link>
            <Nav.Link href="/searchFlight">Поиск билетов</Nav.Link>
        </Nav>);
    }
    if (cookies.get('isAdmin') !== undefined && cookies.get('isLogged') !== undefined) {
        return (<Nav className="mr-auto">
            <Nav.Link href="/home">Главная</Nav.Link>
            <Nav.Link href="/administration">Администрирование</Nav.Link>
            <Nav.Link href="/">Выход</Nav.Link>
        </Nav>);
    } else {
        return (<Nav className="mr-auto">
            <Nav.Link href="/home">Главная</Nav.Link>
            <Nav.Link href="/searchFlight">Поиск билетов</Nav.Link>
            <Nav.Link href="/">Выход</Nav.Link>
        </Nav>);
    }
}

export default ButtonsOnNavPanelAZ;