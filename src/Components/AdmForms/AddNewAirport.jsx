import React from "react";
import {Jumbotron, Form, Button} from "react-bootstrap";
import SpinnerOnAddAirportForm from "./SpinnerOnAddAirportForm";

class AddNewAirport extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            city: null,
            country: null,
            isClicked: false,
        };
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangeCountry = this.handleChangeCountry.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChangeTitle(event) {
        this.setState({title: event.target.value});
        localStorage.setItem('title', event.target.value);
    }

    handleChangeCity(event) {
        this.setState({city: event.target.value});
        localStorage.setItem('city', event.target.value);
    }

    handleChangeCountry(event) {
        this.setState({country: event.target.value});
        localStorage.setItem('country', event.target.value);
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
                        <h3>Добавить аэропорт</h3>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formAirlineTitle">
                                <Form.Label>Название</Form.Label>
                                <Form.Control type="text" placeholder="Enter title" onChange={this.handleChangeTitle}/>
                            </Form.Group>

                            <Form.Group controlId="formAveragePrice">
                                <Form.Label>Страна</Form.Label>
                                <Form.Control type="text" placeholder="Enter country"
                                              onChange={this.handleChangeCountry}/>
                            </Form.Group>

                            <Form.Group controlId="formAirlineRating">
                                <Form.Label>Город</Form.Label>
                                <Form.Control type="text" placeholder="Enter city"
                                              onChange={this.handleChangeCity}/>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Добавить
                            </Button>
                        </Form>
                    </Jumbotron>
                </div>

            );
        } else {
            return (
                <div className='m-auto w-50'>
                    <Jumbotron>
                        <h3>Добавить авиалинию</h3>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formAirlineTitle">
                                <Form.Label>Название</Form.Label>
                                <Form.Control type="text" placeholder="Enter title" onChange={this.handleChangeTitle}/>
                            </Form.Group>

                            <Form.Group controlId="formAveragePrice">
                                <Form.Label>Страна</Form.Label>
                                <Form.Control type="text" placeholder="Enter country"
                                              onChange={this.handleChangeCountry}/>
                            </Form.Group>

                            <Form.Group controlId="formAirlineRating">
                                <Form.Label>Город</Form.Label>
                                <Form.Control type="text" placeholder="Enter city"
                                              onChange={this.handleChangeCity}/>
                            </Form.Group>
                            <SpinnerOnAddAirportForm/>
                        </Form>
                    </Jumbotron>
                </div>

            );
        }
    }


}

export default AddNewAirport;