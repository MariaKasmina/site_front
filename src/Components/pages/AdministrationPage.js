import React from "react";
import NavigationPanel from "../NavigaionPanel";
import AddNewAirline from "../AdmForms/AddNewAirline";
import AirportTable from "../AdmForms/AirportTable";
import AirlineTable from "../AdmForms/AirlineTable";
import TimetableTable from "../AdmForms/TimetableTable";
import AddNewAirport from "../AdmForms/AddNewAirport";
import AddNewTimetableRow from "../AdmForms/AddNewTimetableRow";
import UpdAirlineByIdForm from "../AdmForms/UpdAirlineByIdForm";
import UpdAirportByIdForm from "../AdmForms/UpdAirportByIdForm";
import UpdTimetableByIdForm from "../AdmForms/UpdTimetableByIdForm";
import DelAirlineByIdForm from "../AdmForms/DelAirlineByIdForm";
import DelAirportByIdForm from "../AdmForms/DelAirportByIdForm";
import DelTimetableRowByIdForm from "../AdmForms/DelTimetableRowByIdForm";


function AdministrationPage(props) {
    return (
        <div className="App">
            <header className="App-header">
                <NavigationPanel/>
            </header>
            <AddNewAirline/>
            <AddNewAirport/>
            <AddNewTimetableRow/>
            <UpdAirlineByIdForm/>
            <UpdAirportByIdForm/>
            <UpdTimetableByIdForm/>
            <DelAirlineByIdForm/>
            <DelAirportByIdForm/>
            <DelTimetableRowByIdForm/>
            <AirportTable/>
            <AirlineTable/>
            <TimetableTable/>
        </div>
    );

}

export default AdministrationPage;