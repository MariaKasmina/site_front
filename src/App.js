import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import MainPage from "./Components/MainPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SearchFlightPagePZ from "./Components/SearchFlightPagePZ";
import Cookies from "universal-cookie/es6";
const cookies = new Cookies();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authData: '',
        }
        // this.setAuthData = this.setAuthData.bind(this);
    }

    render() {
        if (localStorage.getItem('userEmail') === null && localStorage.getItem('password') === null) {
            if(Boolean(cookies.get('isLogged')) === true){
                cookies.remove('isLogged', {path:'/'});
            }
            if(Boolean(cookies.get('isSignUp')) === true){
                cookies.remove('isSignUp', {path:'/'});
            }
        }
        /**if(cookies.get('isLogged') === undefined && cookies.get('isSignUp') === undefined){
            localStorage.clear();
        }*/
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/home">
                            <MainPage/>
                        </Route>
                        <Route path="/searchFlight">
                            <SearchFlightPagePZ/>
                        </Route>
                        <Route path="/">
                            <MainPage/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
