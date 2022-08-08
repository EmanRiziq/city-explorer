import { Component } from "react"
// import Table from 'react-bootstrap/Table';
// import { WeatherDaily } from "./WeatherDaily";
// import Carousel from 'react-bootstrap/Carousel';

export default class Weather extends Component {
    render() {
        return (
            <>
                <h1>Weather<br /></h1>
                {this.props.weatherInfo.map((item, index) => {
                    return (<ul key={index} style={{ color: 'antiquewhite' }}>
                        <li>{item.date} {"   -   "}{item.description}</li>
                    </ul>
                    )

                })}
                {/* 
            <div style={{  display: 'flex', justifyContent: 'center' ,padding: '0 0 2 2'}}>
                <Table responsive  hover size="sm">
                    <thead>
                        <tr style={{ color: 'antiquewhite' }}>
                            <th>Date</th>
                            <th>Description</th>
                        </tr> </thead>
                    <tbody>
                        {this.props.weatherInfo.map(item => {
                            return (
                                <tr style={{ color: 'antiquewhite' }}>
                                    <td style={{paddingLeft:'3'}}>{item.date}</td>
                                    <td>{item.description}</td>
                                </tr>
                            )

                        })}
                    </tbody>
                </Table> */}
            </>
        )
    }
}


// <Carousel fade>
// {this.props.weatherInfo.map((item, index) => {
//         <Carousel.Item>
//             <img
//                 className="d-block w-100"
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWUK3bwdUZiV_d_CzB7b2-GasrlFgiXHjE_g&usqp=CAU"
//                 alt="First slide"
//                 width={300} height={300}
//             />
//             <Carousel.Caption>
//                 <h3>{item.date}</h3>
//                 <p>{item.description}</p>
//             </Carousel.Caption>
//         </Carousel.Item>
// })
// }
// </Carousel>

