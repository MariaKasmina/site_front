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
import SearchFlightPage from "./Components/SearchFlightPage";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authData: '',
        }
    }

    setAuthData(data) {
        this.setState({authData: data});
    }

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/home">
                            <MainPage setAuthData={this.setAuthData}/>
                        </Route>
                        <Route path="/searchFlight">
                            <SearchFlightPage authData={this.state.authData}/>
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
