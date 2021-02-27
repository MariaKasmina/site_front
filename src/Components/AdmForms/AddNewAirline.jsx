import React from "react";
import {Jumbotron, Form, Button} from "react-bootstrap";
import SpinnerOnAddNewAirlineForm from "./SpinnerOnAddNewAirlineForm";

class AddNewAirline extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            averagePrice: null,
            rating: null,
            isClicked: false,
        };
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeAveragePrice = this.handleChangeAveragePrice.bind(this);
        this.handleChangeRating = this.handleChangeRating.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChangeTitle(event) {
        this.setState({title: event.target.value});
        localStorage.setItem('title', event.target.value);
    }

    handleChangeAveragePrice(event) {
        this.setState({price: event.target.value});
        localStorage.setItem('price', event.target.value);
    }

    handleChangeRating(event) {
        this.setState({rating: event.target.value});
        localStorage.setItem('rating', event.target.value);
    }

    handleSubmit(event) {
        this.setState({isClicked: true});
        event.preventDefault();
    }


    render() {
        if (!this.state.isClicked) {
            return (
                <div className='mt-3 w-50 d-inline-block'>
                    <Jumbotron>
                        <h3>Добавить авиалинию</h3>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formAirlineTitle">
                                <Form.Label>Название</Form.Label>
                                <Form.Control type="text" placeholder="Enter title" onChange={this.handleChangeTitle}/>
                            </Form.Group>

                            <Form.Group controlId="formAveragePrice">
                                <Form.Label>Средняя цена билета</Form.Label>
                                <Form.Control type="text" placeholder="Enter average price"
                                              onChange={this.handleChangeAveragePrice}/>
                            </Form.Group>

                            <Form.Group controlId="formAirlineRating">
                                <Form.Label>Рейтинг</Form.Label>
                                <Form.Control type="text" placeholder="Enter rating"
                                              onChange={this.handleChangeRating}/>
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
                <div className='mt-3 w-50 d-inline-block'>
                    <Jumbotron>
                        <h3>Добавить авиалинию</h3>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formAirlineTitle">
                                <Form.Label>Название</Form.Label>
                                <Form.Control type="text" placeholder="Enter title" onChange={this.handleChangeTitle}/>
                            </Form.Group>

                            <Form.Group controlId="formAveragePrice">
                                <Form.Label>Средняя цена билета</Form.Label>
                                <Form.Control type="text" placeholder="Enter average price"
                                              onChange={this.handleChangeAveragePrice}/>
                            </Form.Group>

                            <Form.Group controlId="formAirlineRating">
                                <Form.Label>Рейтинг</Form.Label>
                                <Form.Control type="text" placeholder="Enter rating"
                                              onChange={this.handleChangeRating}/>
                            </Form.Group>
                            <SpinnerOnAddNewAirlineForm/>
                        </Form>
                    </Jumbotron>
                </div>

            );
        }
    }


}

export default AddNewAirline;