import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./CardSection.css"
import { add } from '../../redux/features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
const CardSection = ({ data }) => {

    const dispatch = useDispatch();
    const CartItems = useSelector((state) => state.cart)

    const addToCart = (item) => {
        dispatch(add(item));
    }

    const generateQty = (productid) => {
        const Items = CartItems.find((i) => i.id === productid.id)
        return Items ? Items.quantity : 0;
    }

    return (
        <>
            <Card style={{ width: '18rem', marginBottom: "40px" }} >
                <Card.Img variant="top" src={
                    data.image} style={{ width: "50%", height: "50%", margin: "auto" }} />
                <Card.Body>
                    <Card.Title>{data.title.slice(0, 20)}...</Card.Title>
                    <Card.Text>
                        ${data.price}
                    </Card.Text>
                    <div className='item'>selected:{generateQty(data)} </div>
                    <div className='container d-flex btngap '>
                        <Button variant="primary"
                            onClick={() => addToCart(data)} >Add</Button>
                        <Button variant="warning">Remove</Button>
                    </div>

                </Card.Body>
            </Card>
        </>
    )
}

export default CardSection