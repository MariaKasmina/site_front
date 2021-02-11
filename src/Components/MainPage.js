import NavigationPanel from "./NavigaionPanel";
import CarouselFeature from "./CarouselFeature";
import LogInModal from "./LogInModal";
import React from "react";
import LoginButtonsContainer from "./LoginButtonsContainer";

class MainPage extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <NavigationPanel/>
                </header>
                <div className="carousel">
                    <CarouselFeature/>
                </div>
                <LoginButtonsContainer/>
            </div>
        );
    }
}

export default MainPage;