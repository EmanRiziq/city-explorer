import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Map from './component/map';
import MyAlert from './component/alert';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      allCity: {},
      map: {},
      display_name: '',
      latitude: '',
      longitude: '',
      errormsg: '',
      Displayerr: false
    }
  }
  getCityName = async (e) => {
    // console.log(`${process.env.REACT_APP_MAIN_URL}?key=${process.env.REACT_APP_CITY_KEY}&q=${e.target.userCityInput.value}&format=json`);
    e.preventDefault();
    try {

      const cityData = await axios.get(`${process.env.REACT_APP_MAIN_URL}?key=${process.env.REACT_APP_CITY_KEY}&q=${e.target.userCityInput.value}&format=json`)
      console.log(e.target.userCityInput.value);
      // console.log(e.target.userCityInput.value);
      console.log(cityData.data[0]);
      this.setState({
        userInput: e.target.userCityInput.value,
        allCity: cityData.data[0],
        display_name: cityData.data[0].display_name,
        latitude: cityData.data[0].lat,
        longitude: cityData.data[0].lon,
        Displayerr: false
      });
    }
    catch (error) {

      this.setstate({
        Displayerr: true,
        errormsg: error.response.status,
        display_name: ''
      })
    }
  }
  render() {
    return (
      <div className="App">
        <h1> {process.env.REACT_APP_TITLE}</h1>
        <Form onSubmit={this.getCityName}>
          <Form.Label htmlFor="text" id='userCityInput' >Enter City Name </Form.Label>
          <Form.Control type="text" id="userCityInput" />
          <Button variant="primary" type="submit">Explore! </Button>
        </Form>

        {this.state.Displayerr &&
          <MyAlert errormsg={this.state.errormsg } />}
          {/* +':'+error.response.data.error */}

        {this.state.display_name &&
          <>
            <p>City Name: {this.state.display_name}</p>
            <p>City latitude: {this.state.latitude} </p>
            <p>City longitude: {this.state.longitude}</p>

            <Map src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.latitude},${this.state.longitude}&zoom=5`} title={this.state.display_name}>/></Map>
          </>}

      </div>
    );
  }
}

export default App;