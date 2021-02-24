import React from "react";
import axios from "axios";
import {Spinner, Button, Alert} from "react-bootstrap";
import Cookies from "universal-cookie/es6";

const cookies = new Cookies();

/**
 * Компонента отображает компонент загрузки на поп-апе авторизации.
 * Используется кроме того, как компонент, в котором будет вызываться апишка получения ответа от базы: корректен ли логин и пароль
 */

class SpinnerOnSingUpModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login: this.props.login,
            password: this.props.password,
            fName: this.props.fName,
            sName: this.props.sName,
            isCorrect: false,
            count: null
        };
    }

    render() {
        if (this.state.isCorrect === false) {
            return (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            );
        } else if (this.state.isCorrect) {
            return (
                <div>
                    <p>Вы успешно зарегистрировались!</p>
                    <Button variant="success" href="/searchFlight">Перейти к поиску билетов</Button>
                </div>

            );
        }
    }

    async componentDidMount() {
        // запрос используется для получения текущего количества записей в базе, чтобы впоследствии использовать это знание
        // при отправке post запроса в PR_PASSENGER в процессе оформления билета
        await axios.get(`http://localhost:3001/api/sso/users`
        ).then(res => {
            this.setState({count: res.data.length});
        }).catch(function (error) {
            console.log(error);
        })

        await axios.post('http://localhost:3001/api/sso/signup',
            {
                "id": (this.state.count + 1),
                "login": String(this.state.login),
                "password": String(this.state.password)
            }
        ).then(res => {
            if(res.status === 201){
                this.setState({isCorrect: true});
                cookies.set('isSignUp', 'true', {path: '/'});
            }
        }).catch(
            function (error) {
               console.log(error);
            })
    }
}

export default SpinnerOnSingUpModal;