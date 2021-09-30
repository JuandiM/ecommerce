import React from 'react'
import {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

//HOMEVIEW PRODUCTS

const HomeView = () => {
    const [products, setProducts] = useState ([])

    useEffect(()=> {
        const fetchProducts = async () => {
            const {data} = await axios.get('/api/products')

            setProducts(data)
        }

        fetchProducts()
    }, [])

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
