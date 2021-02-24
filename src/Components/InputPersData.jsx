import React from "react";
import {Form, Button} from "react-bootstrap"
import TicketProcessing from "../TicketProcessing";

/**
 * Компонента ввода данных перед оформлением билета
 */

class InputPersData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            surname: '',
            name: '',
            seat: null,
            row: null,
            isClicked: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeSurname = this.handleChangeSurname.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleSelectSeat = this.handleSelectSeat.bind(this);
        this.handleSelectRow = this.handleSelectRow.bind(this);
    }


    handleChangeSurname(event) {
        this.setState({surname: event.target.value});
        localStorage.setItem('surname', event.target.value);
    }

    handleChangeName(event) {
        this.setState({name: event.target.value});
        localStorage.setItem('name', event.target.value);
    }

    handleSelectSeat(event) {
        this.setState({seat: event.target.value});
        localStorage.setItem('seat', event.target.value);
    }

    handleSelectRow(event) {
        this.setState({row: event.target.value});
        localStorage.setItem('row', event.target.value);
    }

    handleSubmit(event) {
        this.setState({isClicked: true});
        event.preventDefault();
    }

    render() {
        if (!this.state.isClicked) {
            return (
                <div>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicSurname">
                            <Form.Label>Фамилия</Form.Label>
                            <Form.Control type="text" placeholder="Enter surname"
                                          onChange={this.handleChangeSurname}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicName">
                            <Form.Label>Имя</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" onChange={this.handleChangeName}/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Выберите место</Form.Label>
                            <Form.Control as="select" multiple>
                                <option onClick={this.handleSelectSeat}>1</option>
                                <option onClick={this.handleSelectSeat}>2</option>
                                <option onClick={this.handleSelectSeat}>3</option>
                                <option onClick={this.handleSelectSeat}>4</option>
                                <option onClick={this.handleSelectSeat}>5</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Выберите ряд</Form.Label>
                            <Form.Control as="select" multiple>
                                <option onClick={this.handleSelectRow}>1</option>
                                <option onClick={this.handleSelectRow}>2</option>
                                <option onClick={this.handleSelectRow}>3</option>
                                <option onClick={this.handleSelectRow}>4</option>
                                <option onClick={this.handleSelectRow}>5</option>
                            </Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Купить билет
                        </Button>
                        <TicketProcessing isClicked={this.state.isClicked} name={this.state.name}
                                          surname={this.state.surname}/>
                    </Form>
                </div>
            );
        } else {
            return (
                <div>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicSurname">
                            <Form.Label>Фамилия</Form.Label>
                            <Form.Control type="text" placeholder="Enter surname"
                                          onChange={this.handleChangeSurname}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicName">
                            <Form.Label>Имя</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" onChange={this.handleChangeName}/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Выберите место</Form.Label>
                            <Form.Control as="select" multiple>
                                <option onClick={this.handleSelectSeat}>1</option>
                                <option onClick={this.handleSelectSeat}>2</option>
                                <option onClick={this.handleSelectSeat}>3</option>
                                <option onClick={this.handleSelectSeat}>4</option>
                                <option onClick={this.handleSelectSeat}>5</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Выберите ряд</Form.Label>
                            <Form.Control as="select" multiple>
                                <option onClick={this.handleSelectRow}>1</option>
                                <option onClick={this.handleSelectRow}>2</option>
                                <option onClick={this.handleSelectRow}>3</option>
                                <option onClick={this.handleSelectRow}>4</option>
                                <option onClick={this.handleSelectRow}>5</option>
                            </Form.Control>
                        </Form.Group>
                        <TicketProcessing isClicked={this.state.isClicked} name={localStorage.getItem('name')}
                                          surname={localStorage.getItem('surname')}/>
                    </Form>
                </div>
            );
        }
    }
}

export default InputPersData;