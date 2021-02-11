import Navbar from "react-bootstrap/Navbar";
import {Nav} from "react-bootstrap";

function NavigationPanel() {
    return (
        <Navbar expand="lg" variant="dark" bg='black'>
            <Navbar.Brand href="#home">AviaSales</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Главная</Nav.Link>
                    <Nav.Link href="/searchFlight">Поиск билетов</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationPanel;