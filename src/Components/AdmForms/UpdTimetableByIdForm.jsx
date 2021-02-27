import React from "react";
import {Jumbotron, Form, Button} from "react-bootstrap";
import SpinnerOnUpdTimetableForm from "./SpinnerOnUpdTimetableForm";

class UpdTimetableByIdForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            title: '',
            city: null,
            country: null,
            isClicked: false,
        };
        this.handleChangeDepDate = this.handleChangeDepDate.bind(this);
        this.handleChangeArrDate = this.handleChangeArrDate.bind(this);
        this.handleChangeIDDep = this.handleChangeIDDep.bind(this);
        this.handleChangeIDArr = this.handleChangeIDArr.bind(this);
        this.handleChangeID = this.handleChangeID.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChangeDepDate(event) {
        this.setState({title: event.target.value});
        localStorage.setItem('dep_date', event.target.value);
    }

    handleChangeID(event) {
        this.setState({id: event.target.value});
        localStorage.setItem('id_timetable', event.target.value);
    }

    handleChangeArrDate(event) {
        this.setState({city: event.target.value});
        localStorage.setItem('arr_date', event.target.value);
    }

    handleChangeIDDep(event) {
        this.setState({country: event.target.value});
        localStorage.setItem('id_dep', event.target.value);
    }

    handleChangeIDArr(event) {
        this.setState({country: event.target.value});
        localStorage.setItem('id_arr', event.target.value);
    }

    handleSubmit(event) {
        this.setState({isClicked: true});
        event.preventDefault();
    }


    render() {
        if (!this.state.isClicked) {
            return (
                <div className='w-50 m-auto'>
                    <Jumbotron>
                        <h3>Обновить запись в расписании</h3>
                        <Form onSubmit={this.handleSubmit}>

                            <Form.Group controlId="formAirlineTitle">
                                <Form.Label>ID</Form.Label>
                                <Form.Control type="text" placeholder="Enter id" onChange={this.handleChangeID}/>
                            </Form.Group>

                            <Form.Group controlId="formAirlineTitle">
                                <Form.Label>Дата отравления</Form.Label>
                                <Form.Control type="text" placeholder="Enter dep_date" onChange={this.handleChangeDepDate}/>
                            </Form.Group>

                            <Form.Group controlId="formAveragePrice">
                                <Form.Label>Дата прибытия</Form.Label>
                                <Form.Control type="text" placeholder="Enter arr_date"
                                              onChange={this.handleChangeArrDate}/>
                            </Form.Group>

                            <Form.Group controlId="formAirlineRating">
                                <Form.Label>ID аэропорта отправления</Form.Label>
                                <Form.Control type="text" placeholder="Enter id"
                                              onChange={this.handleChangeIDDep}/>
                            </Form.Group>

                            <Form.Group controlId="formAirlineRating">
                                <Form.Label>ID аэропорта прибытия</Form.Label>
                                <Form.Control type="text" placeholder="Enter id"
                                              onChange={this.handleChangeIDArr}/>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Изменить данные
                            </Button>
                        </Form>
                    </Jumbotron>
                </div>

            );
        } else {
            return (
                <div className='m-auto w-50'>
                    <Jumbotron>
                        <h3>Обновить запись в расписании</h3>
                        <Form onSubmit={this.handleSubmit}>

                            <Form.Group controlId="formAirlineTitle">
                                <Form.Label>ID</Form.Label>
                                <Form.Control type="text" placeholder="Enter id" onChange={this.handleChangeID}/>
                            </Form.Group>

                            <Form.Group controlId="formAirlineTitle">
                                <Form.Label>Дата отравления</Form.Label>
                                <Form.Control type="text" placeholder="Enter dep_date" onChange={this.handleChangeDepDate}/>
                            </Form.Group>

                            <Form.Group controlId="formAveragePrice">
                                <Form.Label>Дата прибытия</Form.Label>
                                <Form.Control type="text" placeholder="Enter arr_date"
                                              onChange={this.handleChangeArrDate}/>
                            </Form.Group>

                            <Form.Group controlId="formAirlineRating">
                                <Form.Label>ID аэропорта отправления</Form.Label>
                                <Form.Control type="text" placeholder="Enter id"
                                              onChange={this.handleChangeIDDep}/>
                            </Form.Group>

                            <Form.Group controlId="formAirlineRating">
                                <Form.Label>ID аэропорта прибытия</Form.Label>
                                <Form.Control type="text" placeholder="Enter id"
                                              onChange={this.handleChangeIDArr}/>
                            </Form.Group>

                            <SpinnerOnUpdTimetableForm/>
                        </Form>
                    </Jumbotron>
                </div>

            );
        }
    }


}

export default UpdTimetableByIdForm;