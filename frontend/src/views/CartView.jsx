import React from 'react'
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { addToCart, removeFromCart } from '../actions/cartActions'


const CartView = ({ match, location, history}) => {
    const productId = match.params.id

    //query params console.log(quantity) => ?qty(number)
    const qty = location.search ? Number(location.search.split('=')[1]) : 1 //we use split to get the 1 index

        const dispatch = useDispatch()
        
        const cart = useSelector((state) => state.cart)
        const { cartItems } = cart
        //console.log ('your products added to the cart', cartItems)

        useEffect(() => {
            if (productId) {
                dispatch(addToCart(productId, qty))
                //console.log(cart)
            }
        }, [dispatch, productId, qty])

        const removeFromCartHandler = (id) => {
            dispatch(removeFromCart(id))
            //console.log('remove')
        }

        const checkoutHandler = () => {
            //console.log('checkout')
            history.push('/login?redirect=shipping') 
            //if its login redirect to shipping, if not, redirect to login
        }


    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                    {cartItems.length === 0 ? (
                        <h4>
                            Your cart is empty <Link to='/'>Go back and select a product</Link>
                        </h4>
                    ) : ( 
                        <ListGroup variant='flush'>
                            {cartItems.map(item => (
                                //item fields (product, name, image...) came from Cart Actions
                                <ListGroup.Item key={item.product}>
                                    
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                        </Col>
                                        <Col md={3}>
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </Col>
                                        <Col md={2}>
                                            €{item.price}
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control as='select' value={item.qty}
                                                onChange = {(event) => dispatch(addToCart(item.product, 
                                                    Number(event.target.value)))}>
                                                        {[...Array(item.countInStock)
                                                        // {/** [0,1,2,3,4...]*/}
                                                        .keys()] 
                                                        .map(x => (
                                                            <option key={x +1} value={x +1}>
                                                                {x + 1}
                                                            </option>
                                                        ))}
                                            </Form.Control>
                                        </Col>
                                        <Col md={2}>
                                            <Button type='button' variant='light' onClick= {()=>
                                            removeFromCartHandler(item.product)}>
                                                <i className='fas fa-trash'></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                )} 
            </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h3>Subtotal ({cartItems.reduce((acc, item)=> acc + item.qty, 0)}) items</h3>
                                €{cartItems.reduce((acc, item)=> acc + item.qty * item.price, 0).toFixed(2)}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button 
                                    type='button' 
                                    className='btn-block' 
                                    disabled={cartItems.length ===0} 
                                    onClick={checkoutHandler}>Checkout
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>   
        </Row>
    )
}

export default CartView
