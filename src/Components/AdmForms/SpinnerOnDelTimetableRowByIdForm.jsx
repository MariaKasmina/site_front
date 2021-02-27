import React from "react";
import {Spinner} from "react-bootstrap";
import axios from "axios";

class SpinnerOnDelTimetableRowByIdForm extends React.Component{
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
                    <p>Удалено</p>
                </div>
            );
        }
    }

    async componentDidMount() {
        await axios.delete('http://localhost:3001/api/admin/deltimetable?id='.concat(String(localStorage.getItem('id_timetable')))
        ).then(res => {
            if(res.status === 204){
                this.setState({isResponse: true});
                localStorage.removeItem('id_timetable');
            }
        }).catch(
            function (error) {
                console.log(error);
            })
    }


}

export default SpinnerOnDelTimetableRowByIdForm;