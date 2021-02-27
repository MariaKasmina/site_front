import React from "react"
import {Alert} from "react-bootstrap"
import SpinnerOnBookingModal from "./SpinnerOnBookingModal";

class TicketProcessing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            surname: this.props.surname,
            name: this.props.name,
            isResponse: false,
            count: null,
            rowNumber: null,
            seat: null
        };
    }

    updateData = (value) => {
        this.setState({isResponse: value})
    }


    render() {
        if (!this.props.isClicked) {
            return (
                <div>

                </div>
            );
        }
        if (!this.state.isResponse) {
            return (
               <SpinnerOnBookingModal updateData={this.updateData}/>
            );
        } else {
            return (
                < Alert variant='success'>
                    Вы успешно приобрели билет! Приятного путешествия!
                < /Alert>
            )
        }
    }

}

export default TicketProcessing;