import React from "react";
import {Jumbotron, Button, Form} from "react-bootstrap";

class SearchForFlightsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sityFrom: '',
            SityTo: '',
            dateFrom: '',
        };
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value});
        //document.cookie = `userPassword=${this.state.password}; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT`
    }

    handleSubmit(event) {
        alert('hi1' + this.state.email + this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <div className='mt-5 w-50 d-inline-block'>
                <Jumbotron className='pt-4 pb-5'>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Введите город отправления" />
                            <Form.Text className="text-muted">
                                Откуда
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Введите город назначения" />
                            <Form.Text className="text-muted">
                                Куда
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Введите дату отправления в формате: 01.02.20XX" />
                            <Form.Text className="text-muted">
                                Дата отправления
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Найти рейс
                        </Button>
                    </Form>
                </Jumbotron>
            </div>
        );
    }
}

export default SearchForFlightsForm;