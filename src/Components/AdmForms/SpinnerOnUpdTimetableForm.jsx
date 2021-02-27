import React from "react";
import {Spinner} from "react-bootstrap";
import axios from "axios";

class SpinnerOnAddTimetableRowForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isResponse: false,
            count: null
        };
    }

    render() {
        if (this.state.isResponse === false) {
            return (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            );
        } else if (this.state.isResponse) {
            return (
                <div>
                    <p>Изменено</p>
                </div>
            );
        }
    }

    async componentDidMount() {
        await axios.put('http://localhost:3001/api/admin/updtimetable/',
            {
                "id": localStorage.getItem('id_timetable'),
                "date_departure": localStorage.getItem('dep_date'),
                "date_arrival": localStorage.getItem('arr_date'),
                "id_airport_departure": localStorage.getItem('id_dep'),
                "id_airport_arrival": localStorage.getItem('id_arr')
            }
        ).then(res => {
            if(res.status === 200){
                this.setState({isResponse: true});
                localStorage.removeItem('id_timetable');
                localStorage.removeItem('dep_date');
                localStorage.removeItem('arr_date');
                localStorage.removeItem('id_dep');
                localStorage.removeItem('id_arr');
            }
        }).catch(
            function (error) {
                console.log(error);
            })
    }


}

export default SpinnerOnAddTimetableRowForm;