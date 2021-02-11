import NavigationPanel from "./NavigaionPanel";
import CarouselFeature from "./CarouselFeature";
import LogInModal from "./LogInModal";
import React from "react";
import LoginButtonsContainer from "./LoginButtonsContainer";

function MainPage(props) {
    return (
        <div className="App">
            <header className="App-header">
                <NavigationPanel/>
            </header>
            <div className="carousel">
                <CarouselFeature/>
            </div>
            <LoginButtonsContainer setAuthData={props.setAuthData}/>
        </div>
    );

}

export default MainPage;