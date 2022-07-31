import './App.css';
import axios from 'axios';
import { Component } from 'react';
import CityForm from "./component/CityForm"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: []
    }
  }
  getcity = async () => {
    const cityData = await axios.get(`${process.env.REACT_APP_MAIN_URL}`)
    // console.log(city.data.results);
    this.setState({
      city: cityData.data.results
    });
    console.log(cityData)
  }

  render() {
    return (
      <div className="App">
        <CityForm />
      </div>
    );
  }

}

export default App;
