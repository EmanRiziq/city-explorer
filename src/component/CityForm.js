import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
class CityForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            CityData: [],
            displayResult: false,
        }
    }
    handleSubmit = (e) => {
        e.preventdefault();
        console.log("form");
        this.props.getcity(e);
    }
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">Search for location</label>
                    <input id='cityName' type="text" />
                    <button type="submit"> Explore!</button>
                </form>    </>

        )
    }
}
export default CityForm;