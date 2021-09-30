import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, ListGroup, Card, Image,} from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

const EachProductView = ({ match }) => {
    const [product, setProduct] = useState ({});

        useEffect(()=> {
            const fetchProduct = async () => {
                const {data} = await axios.get(`/api/products/${match.params.id}`)

                setProduct(data)
            }

            fetchProduct()
        }, [])

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
                </Col>
            </Row>
        </div>
    )
}

export default EachProductView
