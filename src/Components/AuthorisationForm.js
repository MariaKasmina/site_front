import {Form, Button} from 'react-bootstrap'
import React from "react";
import Cookies from "universal-cookie/es6";

const cookies = new Cookies();

class AuthorisationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChangeEmail(event) {
        this.setState({email: event.target.value});
        this.props.setAuthData(event.target.value);
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Логин или адрес электронной почты</Form.Label>
                    <Form.Control type="email" placeholder="Enter email or login" value={this.state.email}
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
                <Button variant="primary" type="submit" value="Submit" onClick={() => {
                    cookies.set('isLogged', 'true', {path: '/'});
                }} href="/searchFlight">
                    Войти
                </Button>
            </Form>
        );
    }
}

export default AuthorisationForm;