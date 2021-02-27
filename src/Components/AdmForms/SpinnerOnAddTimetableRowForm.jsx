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
                    <p>Добавлено</p>
                </div>
            );
        }
    }

    async componentDidMount() {
        // запрос используется для получения текущего количества записей в базе, чтобы впоследствии использовать это знание
        // при отправке post запроса в PR_PASSENGER в процессе оформления билета
        await axios.get(`http://localhost:3001/api/flight/timetable/`
        ).then(res => {
            this.setState({count: res.data.length});
        }).catch(function (error) {
            console.log(error);
        })

        await axios.post('http://localhost:3001/api/admin/newtimetable/',
            {
                "id": (this.state.count + 1),
                "date_departure": localStorage.getItem('dep_date'),
                "date_arrival": localStorage.getItem('arr_date'),
                "id_airport_departure": localStorage.getItem('id_dep'),
                "id_airport_arrival": localStorage.getItem('id_arr')
            }
        ).then(res => {
            if(res.status === 201){
                this.setState({isResponse: true});
            }
        }).catch(
            function (error) {
                console.log(error);
            })
    }


}

export default SpinnerOnAddTimetableRowForm;