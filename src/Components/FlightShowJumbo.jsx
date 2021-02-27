import React from "react";
import {Jumbotron} from "react-bootstrap";
import axios from "axios";
import RegisterBookingModal from "./RegisterBookingModal";


class FlightShowJumbo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            idFlight: null,
            idAirplane: null,
            idAirline: null,
            idTimeTable: null,
            airlineTitle: null,
            averagePrice: null,
            airplaneTitle: null,
            departureDate: '',
            passengerCount: null,
        };
    }

    render() {
        return (
            <div className='mt-5 w-50 d-inline-block'>
                <Jumbotron className="pt-4 pb-5">
                    <h2>
                        {localStorage.getItem('cityFrom')} -> {localStorage.getItem('cityTo')}
                    </h2>
                    <h4> Рейс предоставлен авиакомпанией: {this.state.airlineTitle}</h4>
                    <p>
                        Самолёт: {this.state.airplaneTitle}
                    </p>
                    <p>
                        Цена билета: {this.state.averagePrice} рублей
                    </p>
                    <p>
                        Отправляемся: {this.state.departureDate}
                    </p>
                    <p>
                        <RegisterBookingModal/>
                    </p>
                </Jumbotron>
            </div>
        );

    }

    async componentDidMount() {
        let flightData = [];
        await axios.get('http://localhost:3001/api/flight/msk/spb'
        ).then(res => {
            flightData = res.data;
        }).catch(function (error) {
            console.log(error);
        })

        this.setState({
            ...this.state, ...{
                isLoading: false,
                idFlight: flightData[0].id_flight,
                idAirline: flightData[0].id_airline,
                idAirplane: flightData[0].id_airplane,
                idTimeTable: flightData[0].id_timetable,
            }
        });

        flightData = [];
        await axios.get(`http://localhost:3001/api/flight/airline/?id=`.concat(String(this.state.idAirline))
        ).then(res => {
            flightData = res.data;
        }).catch(function (error) {
            console.log(error);
        })

        this.setState({
            ...this.state, ...{
                airlineTitle: flightData[0].TITLE,
                averagePrice: flightData[0].AVERAGE_TICKET_PRICE
            }
        });

        flightData = [];
        await axios.get(`http://localhost:3001/api/flight/airplane/?id=`.concat(String(this.state.idAirplane))
        ).then(res => {
            flightData = res.data;
        }).catch(function (error) {
            console.log(error);
        })

        this.setState({
            ...this.state, ...{
                airplaneTitle: flightData[0].TITLE
            }
        });

        flightData = [];
        await axios.get(`http://localhost:3001/api/flight/timetable/?id=`.concat(String(this.state.idTimeTable))
        ).then(res => {
            flightData = res.data;
        }).catch(function (error) {
            console.log(error);
        })

        const date = flightData[0].DEPARTURE_DATE.replace(/\T\d*(...........)/gm, '');

        this.setState({
            ...this.state, ...{
                departureDate: date
            }
        });

        // запрос используется для получения текущего количества записей в базе, чтобы впоследствии использовать это знание
        // при отправке post запроса в PR_PASSENGER в процессе оформления билета
        await axios.get(`http://localhost:3001/api/passenger`
        ).then(res => {
            this.setState({
                ...this.state, ...{
                    passengerCount: res.data.length
                }
            });
        }).catch(function (error) {
            console.log(error);
        })

        localStorage.setItem('idFlight', this.state.idFlight);
        localStorage.setItem('currCountPassenger', this.state.passengerCount);
        localStorage.setItem('idTimetable', this.state.idTimeTable);
    }
}

export default FlightShowJumbo;