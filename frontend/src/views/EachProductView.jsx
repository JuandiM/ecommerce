import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {Row, Col, ListGroup, Card, Image, Button, Form} from 'react-bootstrap'
import Rating from '../components/Rating'
import { listProductDetails, createProductReview } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Meta from '../components/Meta'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'

//Match: params property which contains all the parameters in URL
//History: history.push() redirects you to another URL
const EachProductView = ({ history, match }) => {
    const [qty, setQty] = useState(1)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')


    const dispatch = useDispatch()
    //UseSelector 
    //1.Grab the products from the state
    //2.Pull out what we want from it(loading, err or show products) 
    //3.Display it
    const productDetails = useSelector(state => state.productDetails)
    const {loading, error, product} = productDetails

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const productReviewCreate = useSelector(state => state.productReviewCreate)
    const {error: errorProductReview, success: successProductReview} = productReviewCreate

        useEffect(()=> {
        //1.Make the request to the backend to get the product by id
        //2.Send it through the reducer into the state
        if(successProductReview) {
            alert('Review submitted!')
            setRating(0)
            setComment('')
            dispatch({type: PRODUCT_CREATE_REVIEW_RESET})
        }
           dispatch(listProductDetails(match.params.id))
        }, [dispatch, match, successProductReview])

        const addToCartHandler = () => {
            history.push(`/cart/${match.params.id}?qty=${qty}`) 
            //when you click "Add to Cart" will redirect to Cart/id/quantity
        }

        const submitHandler = (event) => {
            event.preventDefault()
            dispatch(createProductReview(match.params.id, {
                rating, comment
            }))
        }

    return (
        <div>
            <Link className='btn btn-light my-3' 
                to ='/'>Back to Home
            </Link>
            {loading ? 
            <Loader /> 
            : error ? 
            <Message variant='danger'>{error}</Message> 
            : (
                <>
                <Meta title={product.name} />
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
                </Col>
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
            </Row>
            <Row>
                <Col md={6}>
                    <h3>Reviews</h3>
                    {product.reviews.length === 0 && <Message>No Reviews</Message>}
                    <ListGroup variant='flush'>
                        {product.reviews.map(review =>(
                            <ListGroup.Item key={review._id}>
                                <strong>{review.name}</strong>
                                <Rating value={review.rating}/>
                                <p>{review.createdAt.substring(0, 10)}</p>
                                <p>{review.comment}</p>
                            </ListGroup.Item>
                            
                        ))}
                        <ListGroup.Item>
                            <h3>Write a Review to this Product</h3>
                            {errorProductReview && 
                            <Message variant='danger'>{errorProductReview}
                            </Message>}
                            {userInfo ? (<Form onSubmit={submitHandler}>
                                <Form.Group controlId='rating'>
                                    <Form.Label>Rating</Form.Label>
                                    <Form.Control 
                                    as='select' 
                                    value={rating} 
                                    onChange={(event)=> setRating(event.target.value)}>
                                        <option value=''>Select...</option>
                                        <option value='1'>1 - Poor</option>
                                        <option value='2'>2 - Fair</option>
                                        <option value='3'>3 - Good</option>
                                        <option value='4'>4 - Very Good</option>
                                        <option value='5'>5 - Excellent</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId='comment'>
                                    <Form.Label>Comment</Form.Label>
                                    <Form.Control 
                                    as='textarea' 
                                    row='3' 
                                    value={comment} 
                                    onChange={(event) => setComment(event.target.value)}>
                                    </Form.Control>
                                </Form.Group>
                                <Button type='submit' variant='primary'>Submit
                                </Button>
                            </Form>
                            ) : <Message>Please 
                                <Link to ='/login'>login</Link> to review a product</Message>}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            </>
        )}
        </div>
    )
}

export default EachProductView
