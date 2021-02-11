import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import MainPage from "./MainPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SearchFlightPage from "./SearchFlightPage";

function App() {
    return (
        <Router>
            <div>
            <Switch>
                <Route path="/home">
                    <MainPage/>
                </Route>
                <Route path="/searchFlight">
                    <SearchFlightPage/>
                </Route>
                <Route path="/">
                    <MainPage/>
                </Route>
            </Switch>
            </div>
        </Router>
    );
}

export default App;
