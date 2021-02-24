import NavigationPanel from "../../Components/NavigaionPanel";
import React from "react";
import FlightShowJumbo from "../FlightShowJumbo";


function ViewSearchedFlightsAndConfirm() {
    return (
        <div className="App">
            <header className="App-header">
                <NavigationPanel/>
            </header>
            <FlightShowJumbo/>
        </div>
    );
}

export default ViewSearchedFlightsAndConfirm;