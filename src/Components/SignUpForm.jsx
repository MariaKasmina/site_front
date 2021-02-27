import {Form, Button} from 'react-bootstrap'
import React from "react";
import Cookies from "universal-cookie/es6";
import SpinnerOnSingUpModal from "./SpinnerOnSingUpModal";

const cookies = new Cookies();

/**
 * Компонент формы регистрации на сайте
 */

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            secondName: '',
            email: '',
            password: '',
            isClicked: false,
        };
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeSecondName = this.handleChangeSecondName.bind(this);
    }


    handleChangeFirstName(event) {
        this.setState({firstName: event.target.value});
        localStorage.setItem('firstName', event.target.value);
    }

    handleChangeSecondName(event) {
        this.setState({secondName: event.target.value});
        localStorage.setItem('secondName', event.target.value);
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
        localStorage.setItem('userEmail', event.target.value);
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value});
        localStorage.setItem('password', event.target.value);
    }

    handleSubmit(event) {
        this.setState({isClicked: true});
        event.preventDefault();
    }

    render() {
        if (!this.state.isClicked) {
            return (
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Фамилия</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" value={this.state.secondName}
                                      onChange={this.handleChangeSecondName}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" value={this.state.firstName}
                                      onChange={this.handleChangeFirstName}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Логин или адрес электронной почты</Form.Label>
                        <Form.Control type="text" placeholder="Enter email or login" value={this.state.email}
                                      onChange={this.handleChangeEmail}/>
                        <Form.Text className="text-muted">
                            Мы не передадим Ваши данные третьим лицам.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={this.state.password}
                                      onChange={this.handleChangePassword}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" value="Submit">
                        Зарегистрироваться
                    </Button>
                </Form>
            );
        } else {
            return (
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Фамилия</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" value={this.state.secondName}
                                      onChange={this.handleChangeSecondName}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" value={this.state.firstName}
                                      onChange={this.handleChangeFirstName}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Логин или адрес электронной почты</Form.Label>
                        <Form.Control type="text" placeholder="Enter email or login" value={this.state.email}
                                      onChange={this.handleChangeEmail}/>
                        <Form.Text className="text-muted">
                            Мы не передадим Ваши данные третьим лицам.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={this.state.password}
                                      onChange={this.handleChangePassword}/>
                    </Form.Group>
                    <SpinnerOnSingUpModal login={this.state.login} password={this.state.password} fName={this.state.firstName} sName={this.state.secondName}/>
                </Form>
            );
        }
    }
}

export default SignUpForm;