import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {Row, Col, ListGroup, Card, Image, Button, Form} from 'react-bootstrap'
import Rating from '../components/Rating'
import { listProductDetails } from '../actions/productActions'
import { addToCart } from '../actions/cartActions'

//Match: params property which contains all the parameters in URL
//History: history.push() redirects you to another URL
const EachProductView = ({ history, match }) => {
    const [qty, setQty] = useState(1)


    const dispatch = useDispatch()
    //UseSelector 
    //1.Grab the products from the state
    //2.Pull out what we want from it(loading, err or show products) 
    //3.Display it
    const productDetails = useSelector(state => state.productDetails)
    const {loading, error, product} = productDetails

        useEffect(()=> {
        //1.Make the request to the backend to get the product by id
        //2.Send it through the reducer into the state
           dispatch(listProductDetails(match.params.id))
        }, [dispatch, match])

        const addToCartHandler = () => {
            history.push(`/cart/${match.params.id}?qty=${qty}`) 
            //when you click "Add to Cart" will redirect to Cart/id/quantity
        }

    return (
        <div>
            <Link className='btn btn-light my-3' 
                to ='/'>Back to Home
            </Link>
            <Row>
                <Col md={6}>
                    <Image fluid src={product.image} alt={product.name} />
                </Col>
                    <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: €{product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description: {product.description}
                    </ListGroup.Item>
                </ListGroup>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col><strong>€{product.price}</strong></Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {product.countInStock > 0 
                                        ? 'In Stock' 
                                        : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            {/** Quantity of products to add on the cart*/}
                                {product.countInStock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Quantity</Col>
                                            <Col>
                                                <Form.Control as='select' value={qty} onChange = {(event) =>
                                                    setQty(event.target.value)}>
                                                        {[...Array(product.countInStock)
                                                        // {/** [0,1,2,3,4...] array with the number of stock*/}
                                                        .keys()] 
                                                        .map(x => (
                                                            <option key={x + 1} value={x + 1}>
                                                                {x + 1}
                                                            </option>
                                                        ))}
                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}

                                <ListGroup.Item>
                                    <Button 
                                        onClick={addToCartHandler}
                                        className='btn-block'
                                        type='button' 
                                        disabled={product.countInStock === 0}>
                                            Add to Cart
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Col>
            </Row>
        </div>
    )
}

export default EachProductView
