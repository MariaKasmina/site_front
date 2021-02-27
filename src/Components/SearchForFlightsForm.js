import React from "react";
import {Jumbotron, Button, Form} from "react-bootstrap";
import ViewSearchedFlightsAndConfirm from "./pages/ViewSearchedFlightsAndConfirm";

class SearchForFlightsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityFrom: '',
            cityTo: '',
            date: '',
        };
        this.handleChangeCityFrom = this.handleChangeCityFrom.bind(this);
        this.handleChangeCityTo = this.handleChangeCityTo.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChangeCityFrom(event) {
        this.setState({cityFrom: event.target.value});
        localStorage.setItem('cityFrom', event.target.value);
    }

    handleChangeCityTo(event) {
        this.setState({cityTo: event.target.value});
        localStorage.setItem('cityTo', event.target.value);
    }

    handleChangeDate(event) {
        this.setState({date: event.target.value});
        localStorage.setItem('date', event.target.value);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className='mt-5 w-50 d-inline-block'>
                <Jumbotron className='pt-4 pb-5'>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formCityFrom">
                            <Form.Control type="text" placeholder="Введите город отправления" onChange={this.handleChangeCityFrom}/>
                            <Form.Text className="text-muted">
                                Откуда
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formCityTo">
                            <Form.Control type="text" placeholder="Введите город назначения" onChange={this.handleChangeCityTo}/>
                            <Form.Text className="text-muted">
                                Куда
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formData">
                            <Form.Control type="text" placeholder="Введите дату отправления в формате: 01.02.20XX" onChange={this.handleChangeDate}/>
                            <Form.Text className="text-muted">
                                Дата отправления
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit" href="/msk/spb">
                            Найти рейс
                        </Button>
                    </Form>
                </Jumbotron>
            </div>
        );
    }
}

export default SearchForFlightsForm;