import React from 'react'
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {Row, Col, ListGroup, Card, Image,} from 'react-bootstrap'
import Rating from '../components/Rating'
import { listProductDetails } from '../actions/productActions'


const EachProductView = ({ match }) => {

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
                            <ListGroup.Item>
                                <button className='btn-block'
                                 type='button' 
                                 disabled={product.countInStock === 0}>
                                    Add to Cart
                                </button>
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
