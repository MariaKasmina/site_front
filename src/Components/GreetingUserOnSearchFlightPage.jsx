import React from "react";
import Cookies from "universal-cookie/es6";

const cookie = new Cookies();

function GreetingUserOnSearchFlightPage() {
    if (cookie.get('isLogged') !== undefined) {
        return (<h1 style={{color: "white"}}> Привет, {localStorage.getItem('userEmail')} !</h1>);
    }
    if(cookie.get('isSignUp') !== undefined){
        return (<h1 style={{color: "white"}}> Привет, {localStorage.getItem('secondName')} {localStorage.getItem('firstName')} !</h1>);
    }
    return(<div> </div>);
}

export default GreetingUserOnSearchFlightPage;