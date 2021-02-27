import React from "react";
import axios from "axios";
import {Spinner, Button, Alert} from "react-bootstrap";
import Cookies from "universal-cookie/es6";

const cookies = new Cookies();

/**
 * Компонента отображает компонент загрузки на поп-апе авторизации.
 * Используется кроме того, как компонент, в котором будет вызываться апишка получения ответа от базы: корректен ли логин и пароль
 */

class SpinnerOnLoginModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login: this.props.login,
            password: null,
            isCorrect: false,
        };
    }

    render() {
        //alert(this.state.isCorrect)
        if (this.state.isCorrect === false) {
            return (
                <div>
                    <Alert variant="danger">
                        Что-то пошло не так! Проверьте введенные данные
                    </Alert>
                    <Button variant="danger" onClick={this.componentDidMount}>Войти</Button>
                </div>
            );
        } else if (this.state.isCorrect) {
            return (
                <div>
                    <p>Вы успешно авторизовались!</p>
                    <Button variant="success" href="/searchFlight">Перейти к поиску билетов</Button>
                </div>

            );
        }
        return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        );
    }

    async componentDidMount() {
        await axios.get('http://localhost:3001/api/sso/signin?login='.concat(String(localStorage.getItem('userEmail')))
        ).then(res => {
            this.setState({password: res.data[0].PASSWORD})
            if ((this.state.password === localStorage.getItem('password')) && (res.status === 200)) {
                this.setState({isCorrect: true});
                if(localStorage.getItem('userEmail') === 'admin'){
                    cookies.set('isAdmin', 'true', {path: '/'});
                    cookies.set('isLogged', 'true', {path: '/'});
                }
                cookies.set('isLogged', 'true', {path: '/'});
            }
        }).catch(
            function (error) {
            console.log(error);
        })
    }
}

export default SpinnerOnLoginModal;