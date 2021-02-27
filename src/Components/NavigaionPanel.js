import Navbar from "react-bootstrap/Navbar";
import ButtonsOnNavPanelAZ from "./AZ/ButtonsOnNavPanelAZ";

/**
 * Компонента ленты навигации на главной странице
 */
function NavigationPanel() {
    return (
        <Navbar expand="lg" variant="dark" bg='black'>
            <Navbar.Brand href="#home">AviaSales</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <ButtonsOnNavPanelAZ/>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationPanel;