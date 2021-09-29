import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'

//HOMEVIEW PRODUCTS

const HomeView = () => {
    return (
        <>
            <h1>Products</h1>
            <Row>
                {products.map(product =>( //Loop all products
                    <Col key={product._id} //Access to each product we are looping with the id
                        sm={12} md={6} lg={4} xl={3}>
                    <Product product={product}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeView
