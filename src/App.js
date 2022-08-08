import './App.css';
import React, { Component, useSyncExternalStore } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Map from './component/map';
import MyAlert from './component/alert';
import Weather from './component/Weather';
import Movies from './component/Movies.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            allCity: {},
            display_name: '',
            latitude: '',
            longitude: '',
            // errormsg: '',
            Displayerr: false,
            weather: [],
            isweather: false,
            Movies: [],
            isMovies: false
        }
    }
    updateUserInput = (e) => {
        this.setState({
            userInput: e.target.value,
        });
    }
    getCityName = async (e) => {
        e.preventDefault();
        try {
            const cityData = await axios.get(`${process.env.REACT_APP_MAIN_URL}?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.userInput}&format=json`)
            this.setState({
                allCity: cityData.data[0],
                display_name: cityData.data[0].display_name,
                latitude: cityData.data[0].lat,
                longitude: cityData.data[0].lon,
                Displayerr: false
            });
            console.log("test" + this.state.display_name);
            this.displayMovies(e.target.userCityInput.value);
            this.displayWeather(cityData.data[0].lat, cityData.data[0].lon);
        }
        catch (error) {
            this.setState({
                Displayerr: true,
                // errormsg: error.response.status,
                display_name: ''
            })
        }
    }
    displayWeather = async (lat, lon, searchQuery) => {
        try {

            const weatherData = await axios.get(`https://eman-city-server.herokuapp.com/weather?&lat=${lat}&lon=${lon}&searchQuery=${searchQuery}`)
            // const weatherData = await axios.get(`${process.env.REACT_APP_SERVER_MAIN}/weather?&lat=${lat}&lon=${lon}&searchQuery=${searchQuery}`)
            this.setState({
                isweather: true,
                weather: weatherData.data,
            })
        }
        catch (error) {
            this.setState({
                Displayerr: true,
                // errormsg: error.response.status,
                display_name: ''
            })
        }
    }
    displayMovies = async (searchQuery) => {
        try {
            const MoviesData = await axios.get(`https://eman-city-server.herokuapp.com/Movies?&searchQuery=${searchQuery}`)

            // const MoviesData = await axios.get(`${process.env.REACT_APP_SERVER_MAIN}/Movies?&searchQuery=${searchQuery}`)
            this.setState({
                isMovies: true,
                Movies: MoviesData.data,
            })
        }
        catch (error) {
            this.setState({
                Displayerr: true,
                // errormsg: error.response.status,
                display_name: ''
            })
        }
    }
    render() {
        return (
            <div className="App" >
                <h1> {process.env.REACT_APP_TITLE}</h1>
                <Form onSubmit={this.getCityName}>
                    <Form.Label htmlFor="text" id='userCityInput' >Enter City Name </Form.Label>
                    <Form.Control onChange={this.updateUserInput} type="text" id="userCityInput" />
                    <Button variant="primary" type="submit">Explore! </Button>
                </Form>
                {/* {this.state.Displayerr && */}
                    // <MyAlert errormsg={this.state.errormsg} />}
                    // <p>{this.state.errormsg}</p>}
                {this.state.display_name &&
                    <>
                        <p>City Name: {this.state.display_name}</p>
                        <p>City latitude: {this.state.latitude} </p>
                        <p>City longitude: {this.state.longitude}</p>
                        <div className='weathermovie'>
                            <Map img_src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.latitude},${this.state.longitude}&zoom=10`} title={this.state.display_name} />
                            {
                                this.state.isweather &&
                                <Weather weatherInfo={this.state.weather} />
                            }
                            {
                                this.state.isMovies &&
                                <Movies MoviesInfo={this.state.Movies} />
                            }</div>
                    </>
                }
            </div>
        );
    }
}

export default App;