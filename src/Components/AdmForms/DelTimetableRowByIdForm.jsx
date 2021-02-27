import React from "react";
import {Jumbotron, Form, Button} from "react-bootstrap";
import SpinnerOnDelTimetableRowByIdForm from "./SpinnerOnDelTimetableRowByIdForm";

class DelAirportByIdForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChangeID(event) {
        localStorage.setItem('id_timetable', event.target.value);
    }

    handleSubmit(event) {
        this.setState({isClicked: true});
        event.preventDefault();
    }


    render() {
        if (!this.state.isClicked) {
            return (
                <div className='m-auto w-50'>
                    <Jumbotron>
                        <h3>Удалить строку расписания</h3>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formAirlineTitle">
                                <Form.Label>ID</Form.Label>
                                <Form.Control type="text" placeholder="Enter ID" onChange={this.handleChangeID}/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Удалить данные
                            </Button>
                        </Form>
                    </Jumbotron>
                </div>

            );
        } else {
            return (
                <div className='m-auto w-50'>
                    <Jumbotron>
                        <h3>Удалить строку расписания</h3>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formAirlineTitle">
                                <Form.Label>ID</Form.Label>
                                <Form.Control type="text" placeholder="Enter ID" onChange={this.handleChangeID}/>
                            </Form.Group>
                            <SpinnerOnDelTimetableRowByIdForm/>
                        </Form>
                    </Jumbotron>
                </div>

            );
        }
    }


}

export default DelAirportByIdForm;