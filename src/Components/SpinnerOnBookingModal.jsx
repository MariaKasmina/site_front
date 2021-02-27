import React from "react";
import axios from "axios"
import {Spinner} from "react-bootstrap";

class SpinnerOnBookingModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: null,
            isResponse: false
        };
    }

    render() {
        return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        );
    }



    async componentDidMount() {
        await axios.get('http://localhost:3001/api/booking/items').then(
            res => {
                this.setState({count: res.data.length});
            }
        ).catch(function (error) {
            console.log(error);
        })

        axios.post('http://localhost:3001/api/passenger', {
            "id_passenger": (parseInt(localStorage.getItem('currCountPassenger')) + 1),
            "name": String(localStorage.getItem("surname")).concat(' ').concat(localStorage.getItem('name')),
            "id_baggage": null
        })

        await axios.post('http://localhost:3001/api/createbooking', {
                "id": (this.state.count + 1),
                "row_number": parseInt(localStorage.getItem('row')),
                "seat": parseInt(localStorage.getItem('seat')),
                "id_passenger": (parseInt(localStorage.getItem('currCountPassenger')) + 1),
                "id_flight": parseInt(localStorage.getItem('idFlight')),
                "id_timetable": parseInt(localStorage.getItem('idTimetable'))
            }
        ).then(res => {
            if (res.status === 201) {
                this.setState({isResponse: true});
                this.props.updateData(this.state.isResponse);
                localStorage.clear();
            }
        }).catch(
            function (error) {
                console.log(error);
            })
    }


}

export default SpinnerOnBookingModal;