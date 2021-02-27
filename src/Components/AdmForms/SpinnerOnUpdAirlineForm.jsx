import React from "react";
import {Spinner} from "react-bootstrap";
import axios from "axios";

class SpinnerOnUpdAirlineForm extends React.Component{
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
        await axios.put('http://localhost:3001/api/admin/updairline/',
            {
                "id": localStorage.getItem('id_airline'),
                "title": String(localStorage.getItem('title')),
                "average_ticket_price": localStorage.getItem('price'),
                "rating": localStorage.getItem('rating')
            }
        ).then(res => {
            if(res.status === 200){
                this.setState({isResponse: true});
                localStorage.removeItem('id_airline');
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

export default SpinnerOnUpdAirlineForm;