import React from "react";
import {Spinner} from "react-bootstrap";
import axios from "axios";

class SpinnerOnUpdAirportForm extends React.Component{
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
        await axios.put('http://localhost:3001/api/admin/updairport/',
            {
                "id": localStorage.getItem('id_airport'),
                "title": String(localStorage.getItem('title')),
                "country": localStorage.getItem('country'),
                "city": localStorage.getItem('city')
            }
        ).then(res => {
            if(res.status === 200){
                this.setState({isResponse: true});
                localStorage.removeItem('id_airport');
                localStorage.removeItem('title');
                localStorage.removeItem('country');
                localStorage.removeItem('city');
            }
        }).catch(
            function (error) {
                console.log(error);
            })
    }


}

export default SpinnerOnUpdAirportForm;