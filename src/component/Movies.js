// import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MoviesCard from './MoviesCard';

import { Component } from "react"
export default class Movies extends Component {
    render() {
        return (
            <>
                <h1> movies</h1>
                <Row xs={1} md={3} className="g-4">
                    {this.props.MoviesInfo.map((item,index) => {
                        return (
                            <Col key={index}>
                                <MoviesCard item={item} />
                            </Col>
                        )
                    }
                    )}
                </Row>
            </>
        )
    }
}