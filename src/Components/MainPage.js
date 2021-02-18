import NavigationPanel from "./NavigaionPanel";
import CarouselFeature from "./CarouselFeature";
import React from "react";
import LoginButtonsContainer from "./LoginButtonsContainer";
import TestComponent from "./TestComponent";

function MainPage(props) {
    return (
        <div className="App">
            <header className="App-header">
                <NavigationPanel/>
            </header>
            <div className="carousel">
                <CarouselFeature/>
            </div>
            <LoginButtonsContainer/>
            <TestComponent/>
        </div>
    );

}

export default MainPage;