import {Form, Button} from 'react-bootstrap'
import React from "react";
import SpinnerOnLoginModal from "./SpinnerOnLoginModal";

class AuthorisationForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isClicked: false,
        };
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                <div>
                    <Form onSubmit={this.handleSubmit}>
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
                            Войти
                        </Button>
                    </Form>
                </div>
            );
        } else {
            return (
                <div>
                    <Form onSubmit={this.handleSubmit}>
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
                        <SpinnerOnLoginModal login={this.state.email}/>
                    </Form>
                </div>
            );
        }
    }
}


export default AuthorisationForm;