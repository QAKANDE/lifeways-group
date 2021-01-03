import React, { Component } from 'react';
import { Row, Col, Container, CardDeck, Card } from "react-bootstrap"
import {Link} from "react-router-dom"

class DailyDiary extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <Card>
                <Link to={"/dailydiary/" + this.props.id}>
    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        
        <Card.Title>{this.props.firstName} {this.props.lastName}</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
                </Link>
  </Card>
                </>
         );
    }
}
 
export default DailyDiary;