import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
//useDispatch: to dispatch or call the action
//useSelector: to select parts of the state
import {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'

//HOMEVIEW PRODUCTS

const HomeView = () => {
    const dispatch = useDispatch ()

    //UseSelector 
    //1.Grab the products from the state
    //2.Pull out what we want from it(loading, err or show products) 
    //3.Display it
    const productList = useSelector(state => state.productList)
    const {loading, error, products } = productList

    useEffect(()=> {
        dispatch(listProducts()) 
        //1.Make the request to the backend to get the products 
        //2.Send them through the reducer into the state
  
        }, [dispatch]) //it could be empty, but we pass dispatch as dependency to avoid a warning in the console

    return (
        <>
            <h1>Products</h1>
                {loading ? ( 
                <Loader /> ) 
                : error ? ( 
                <Message variant='danger'>
                    {error}
                </Message>
                ) : (
                <Row>
                {products.map(product =>( //Loop all products
                    <Col key={product._id} //Access to each product we are looping with the id
                        sm={12} md={6} lg={4} xl={3}>
                    <Product product={product}/>
                    </Col>
                ))}
            </Row>
            )}

        </>
    )
}

export default HomeView
