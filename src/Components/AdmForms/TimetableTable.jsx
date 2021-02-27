import React from "react";
import axios from "axios";
import {Table} from "react-bootstrap";

class TimetableTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            arr: null,
            isRes: false,
        };
    }


    render() {
        if (this.state.isRes) {
            return(
                <div className='w-50 ml-5 m-auto'>
                    <h3 style={{color: 'white'}}>Расписание</h3>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>№</th>
                            <th>Дата отправления</th>
                            <th>Дата прибытия</th>
                            <th>ID аэропорта отправления</th>
                            <th>ID аэропорта прибытия</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.arr.map((element, idx) =>
                            <tr>
                                <td>{idx+1}</td>
                                <td>{element.DEPARTURE_DATE}</td>
                                <td>{element.ARRIVAL_DATE}</td>
                                <td>{element.ID_AIRPORT_DEPARTURE}</td>
                                <td>{element.ID_AIRPORT_ARRIVAL}</td>
                            </tr>)}
                        </tbody>
                    </Table>
                </div>
            );
        } else {
            return (<div> </div>);
        }
    }

    async componentDidMount() {
        // запрос используется для получения текущего количества записей в базе, чтобы впоследствии использовать это знание
        // при отправке post запроса в PR_PASSENGER в процессе оформления билета
        await axios.get(`http://localhost:3001/api/flight/timetable/`
        ).then(res => {
            this.setState({arr: res.data});
            this.setState({isRes: true})
            // alert(this.state.arr)
        }).catch(function (error) {
            console.log(error);
        })
    }


}

export default TimetableTable;