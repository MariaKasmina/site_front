import NavigationPanel from "./NavigaionPanel";
import React from "react";
import SearchForFlightsForm from "./SearchForFlightsForm";
import CardsOnSearchFlightPage from "./CardsOnSearchFlightPage";
import SearchFlightPageAZ from "./SearchFlightPageAZ";

function SearchFlightPagePZ(props) {
    if (localStorage.getItem('userEmail') !== null) {
        return (
            <SearchFlightPageAZ/>
        );
    } else {
        return (
            <div className="App">
                <header className="App-header">
                    <NavigationPanel/>
                </header>
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
}

export default SearchFlightPagePZ;