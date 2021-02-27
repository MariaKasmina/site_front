import React from "react";
import NavigationPanel from "../NavigaionPanel";
import AddNewAirline from "../AdmForms/AddNewAirline";
import AirportTable from "../AdmForms/AirportTable";
import AirlineTable from "../AdmForms/AirlineTable";
import TimetableTable from "../AdmForms/TimetableTable";
import AddNewAirport from "../AdmForms/AddNewAirport";
import AddNewTimetableRow from "../AdmForms/AddNewTimetableRow";


function AdministrationPage(props) {
    return (
        <div className="App">
            <header className="App-header">
                <NavigationPanel/>
            </header>
            <AddNewAirline/>
            <AddNewAirport/>
            <AddNewTimetableRow/>
            <AirportTable/>
            <AirlineTable/>
            <TimetableTable/>
        </div>
    );

}

export default AdministrationPage;