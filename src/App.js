import './App.css';
import React, { Component, useSyncExternalStore } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Map from './component/map';
import MyAlert from './component/alert';
import Weather from './component/Weather';
import Movies from './component/Movies.js';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            allCity: {},
            display_name: '',
            latitude: '',
            longitude: '',
            errormsg: '',
            Displayerr: false,
            weather: [],
            isweather: false,
            Movies: [],
            isMovies: false
        }
    }

    getCityName = async (e) => {
        e.preventDefault();

        try {
            const cityData = await axios.get(`${process.env.REACT_APP_MAIN_URL}?key=${process.env.REACT_APP_CITY_KEY}&q=${e.target.userCityInput.value}&format=json`)
            this.setState({
                userInput: e.target.userCityInput.value,
                allCity: cityData.data[0],
                display_name: cityData.data[0].display_name,
                latitude: cityData.data[0].lat,
                longitude: cityData.data[0].lon,
                Displayerr: false
            });

            this.displayWeather(e.target.userCityInput.value, cityData.data[0].lat, cityData.data[0].lon);
            this.displayMovies(e.target.userCityInput.value);
        }
        catch (error) {
            this.setstate({
                Displayerr: true,
                errormsg: error.response.status,
                display_name: ''
            })
        }
    }


    displayWeather = async (lat, lon) => {
        const weatherData = await axios.get(`${process.env.REACT_APP_SERVER_MAIN}/weather?&lat=${lat}&lon=${lon}`)
        this.setState({
            isweather: true,
            weather: weatherData.data,
        })
    }


    displayMovies = async (searchQuery) => {
        const MoviesData = await axios.get(`${process.env.REACT_APP_SERVER_MAIN}/Movies?&searchQuery=${searchQuery}`)
        this.setState({
            isMovies: true,
            Movies: MoviesData.data,
        })
        console.log("movies "+MoviesData.data);

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
                    <MyAlert errormsg={this.state.errormsg} />}
                {/* +':'+error.response.data.error */}
                {this.state.display_name &&
                    <>
                        <p>City Name: {this.state.display_name}</p>
                        <p>City latitude: {this.state.latitude} </p>
                        <p>City longitude: {this.state.longitude}</p>
                        <p> weather :{this.state.isweather}</p>
                        <Map img_src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.latitude},${this.state.longitude}&zoom=10`} title={this.state.display_name} />
                        {
                            this.state.isweather &&
                            <Weather weatherInfo={this.state.weather} />
                        }
                        {
                            this.state.isMovies &&
                            <Movies MoviesInfo={this.state.Movies} />
                        }
                    </>
                }
            </div>
        );
    }
}

export default App;