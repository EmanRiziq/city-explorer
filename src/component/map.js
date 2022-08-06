import { Component } from "react"

class Map extends Component {
    render() {
        return (
            
                <img src={this.props.img_src} alt={this.props.title} width={500} height={500}/>

        )
    }
}
export default Map;