import { Component } from "react"
export default class Movies extends Component {
    render() {
        console.log(this.props.MoviesInfo);
        return (
            <>
            <p> movies</p>
                {this.props.MoviesInfo.map(item =>
                    <li>{item.date} : {item.title}</li>
                )}

            </>
        )
    }
}