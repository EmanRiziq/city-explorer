import { Component } from "react";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
export class WeatherDaily extends Component {

    render() {

        return (
            <Carousel activeIndex={this.props.index}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWUK3bwdUZiV_d_CzB7b2-GasrlFgiXHjE_g&usqp=CAU"
                        alt="First slide"
                        width={300} height={300}
                    />
                    <Carousel.Caption>
                        <h3>{this.props.item.date}</h3>
                        <p>{this.props.item.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )

    }
}