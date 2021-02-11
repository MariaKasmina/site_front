import NavigationPanel from "./NavigaionPanel";
import React from "react";
import Cookies from 'universal-cookie';
import SearchForFlightsForm from "./SearchForFlightsForm";
import CardsOnSearchFlightPage from "./CardsOnSearchFlightPage";

function SearchFlightPage(props) {
    return (
        <div className="App">
            <header className="App-header">
                <NavigationPanel/>
            </header>
            <h1 style={{color: "white"}}> Привет, {props.authData} !</h1>
            <h2 style={{color: "white"}} className='mt-2 mb-2'>Введите необходимые данные в форму ниже и Ваше
                путешествие станет ближе</h2>
            <div>
                <SearchForFlightsForm/>
            </div>
            <div>
                <h3 className='mt-1 mb-2' style={{color: "white"}}>Популярные направления</h3>
                <CardsOnSearchFlightPage/>
            </div>
        </div>
    );
}

export default SearchFlightPage;