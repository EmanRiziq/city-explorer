import { Component } from "react"
export default class Weather extends Component {
    render() {
        return (
            <>
                {this.props.weatherInfo.map(item =>
                    <li>{item.date} : {item.description}</li>
                )}
            </>)
    }
}