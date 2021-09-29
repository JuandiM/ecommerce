import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, ListGroup, Card, Image,} from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

const EachProductView = ({ match }) => {
    const product = products.find(product => product._id === match.params.id)
    

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
                        Description: €{product.description}
                    </ListGroup.Item>
                </ListGroup>
                </Col>
            </Row>
        </div>
    )
}

export default EachProductView
