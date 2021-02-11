import React from "react";
import LogInModal from "./LogInModal";
import Cookies from "universal-cookie/es6";

const cookies = new Cookies();

// не отрисовывает блок с кнопками авторизации на главной, если в куках isLogged == false
function LoginButtonsContainer(props) {
    if (!Boolean(cookies.get('isLogged')) && !Boolean(cookies.get('isSignUp'))) {
        return (
            <div className='login-buttons-container'>
                <h2 style={{color: 'white', backgroundColor: '#282c34',}}> Давайте знакомиться! </h2>
                <h3 style={{color: 'white'}}> Вы можете Войти в личный кабинет или Зарегистрироваться на
                    сайте</h3>
                <div className='choose-login-buttons'>
                    <LogInModal/>
                </div>
            </div>
        );
    } else {
        return(
            <div> </div>
        );
    }
}

export default LoginButtonsContainer;