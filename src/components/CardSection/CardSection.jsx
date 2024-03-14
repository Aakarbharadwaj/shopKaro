import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./CardSection.css"
const CardSection = ({ image, title, price }) => {
    return (
        <>
            <Card style={{ width: '18rem', marginBottom: "40px" }} >
                <Card.Img variant="top" src={image} style={{ width: "50%", height: "50%", margin: "auto" }} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        ${price}
                    </Card.Text>
                    <div className='item'>count</div>
                    <div className='container d-flex btngap mb-5'>
                        <Button variant="primary">Add</Button>
                        <Button variant="warning">Remove</Button>
                    </div>

                </Card.Body>
            </Card>
        </>
    )
}

export default CardSection