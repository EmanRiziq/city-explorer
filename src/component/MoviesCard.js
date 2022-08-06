import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { Component } from "react"
export default class MoviesCard extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={this.props.item.path} alt={this.props.item.title} />
                <Card.Body>
                    <Card.Title>{this.props.item.title}</Card.Title>
                    <Card.Text>  release date: {this.props.item.date} </Card.Text>
                    <Card.Text>  rating: {this.props.item.rate}  </Card.Text>
                    <Card.Text>  Description: {this.props.item.Description}  </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}