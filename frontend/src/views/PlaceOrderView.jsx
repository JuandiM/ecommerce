import React from 'react'
import {useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Row, Col, Image, Card, ListGroup, Button, ProgressBar } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'
import { createOrder } from '../actions/orderActions'
import FormContainer from '../components/FormContainer'

const PlaceOrderView = ({history}) => {
    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)

    //Calculate prices & total price
    const addDecimals = (num) => {
        return ((Math.round(num * 100) / 100).toFixed(2))
    }

    cart.itemsPrice = addDecimals(cart.cartItems.reduce(
        (acc, item) => acc + item.price * item.qty, 0))

    cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : (0.12 * cart.itemsPrice).toFixed(2))
    cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)))

    cart.totalPrice = 
    addDecimals((Number(cart.itemsPrice) 
    + Number(cart.shippingPrice) 
    + Number(cart.taxPrice))
    .toFixed(2))


    const orderCreate = useSelector(state => state.orderCreate)
    const {order, success, error} = orderCreate

    useEffect(() => {
        if(success) {
            history.push(`/order/${order._id}`)
        }
    }, [history, success ])

    
    const placeOrderHandler = () => {
        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            taxPrice: cart.taxPrice,
            totalPrice: cart.totalPrice

        }))
    }

    return (
        <>
        <FormContainer>
        <ProgressBar variant="success" animated now={90} />
           <CheckoutSteps className='steps' step1 step2 step3 step4 />
           </FormContainer>
           <Row>
               <Col md={8}>
                   <ListGroup variant='flush'>
                       <ListGroup.Item>
                           <h2>Shipping</h2>
                           <p>
                               <strong>Address: </strong>
                               <div className='userName'>
                               {cart.shippingAddress.address}&nbsp;
                               {cart.shippingAddress.city}&nbsp;
                               {cart.shippingAddress.postalCode}&nbsp; 
                               {cart.shippingAddress.country}
                               </div>
                            </p>
                       </ListGroup.Item>

                       <ListGroup.Item>
                           <h2>Payment Method</h2>
                               <strong>Method selected: </strong>
                               <div className='userName'>
                               {cart.paymentMethod}
                               </div>
                               
                       </ListGroup.Item>

                       <ListGroup.Item>
                           <h2>Order Items</h2>
                           {cart.cartItems.length === 0 ? <Message>Your cart is empty</Message> : (
                               <ListGroup variant='flush'>
                                {cart.cartItems.map((item, index) => (
                                    <ListGroup.Item key={index}>
                                        <Row>
                                            <Col md={1}>
                                                <Image src={item.image} alt={item.name} fluid rounded />
                                            </Col>
                                            <Col>
                                            <Link to={`/product/${item.product}`}>
                                                {item.name}
                                            </Link>
                                            </Col>
                                            <Col md={4}>
                                              {item.qty} x €{item.price} = €{item.qty * item.price}
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))}
                               </ListGroup>
                           )}
                       </ListGroup.Item>
                   </ListGroup>
               </Col>
               <Col md={4}>
                   <Card>
                       <ListGroup variant='flush'>
                           <ListGroup.Item>
                               <h2>Order Summary</h2>
                           </ListGroup.Item>
                           <ListGroup.Item>
                               <Row>
                                   <Col>Items</Col>
                                   <Col>€{cart.itemsPrice}</Col>
                               </Row>
                           </ListGroup.Item>
                           <ListGroup.Item>
                               <Row>
                                   <Col>Shipping</Col>
                                   <Col>€{cart.shippingPrice}</Col>
                               </Row>
                           </ListGroup.Item>
                           <ListGroup.Item>
                               <Row>
                                   <Col>Tax</Col>
                                   <Col>€{cart.taxPrice}</Col>
                               </Row>
                           </ListGroup.Item>
                           <ListGroup.Item>
                               <Row>
                                   <Col><strong>Total</strong></Col>
                                   <Col>€{cart.totalPrice}</Col>
                               </Row>
                           </ListGroup.Item>
                           
                           <ListGroup className="d-grid gap-2">
                               <Button 
                               type='button' 
                               className='button1 btn-block' 
                               disabled={cart.cartItems === 0} 
                               onClick={placeOrderHandler}>
                                    Place Order
                               </Button>
                           </ListGroup>
                           <ListGroup>
                               {error && <Message variant='danger'>{error}</Message>}
                           </ListGroup>
                       </ListGroup>
                   </Card>
               </Col>
           </Row>
        </>
    )
}

export default PlaceOrderView
