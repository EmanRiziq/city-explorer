import { Component } from "react"

 class Map extends Component
{
    render(){
        return (
            <>
      <img src={this.props.map.src} alt ={this.props.title}/>
    </>

        )
    }
}
export default Map;