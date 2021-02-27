import React from "react";
import {Spinner} from "react-bootstrap";
import axios from "axios";

class SpinnerOnAddNewAirlineForm extends React.Component{
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
        await axios.get(`http://localhost:3001/api/flight/airline/`
        ).then(res => {
            this.setState({count: res.data.length});
        }).catch(function (error) {
            console.log(error);
        })

        await axios.post('http://localhost:3001/api/admin/newairline/',
            {
                "id": (this.state.count + 1),
                "title": String(localStorage.getItem('title')),
                "average_ticket_price": localStorage.getItem('price'),
                "rating": localStorage.getItem('rating')
            }
        ).then(res => {
            if(res.status === 201){
                this.setState({isResponse: true});
                localStorage.removeItem('title');
                localStorage.removeItem('price');
                localStorage.removeItem('rating');
            }
        }).catch(
            function (error) {
                console.log(error);
            })
    }


}

export default SpinnerOnAddNewAirlineForm;