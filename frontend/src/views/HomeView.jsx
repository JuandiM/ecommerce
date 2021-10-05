import React from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
//useDispatch: to dispatch or call the action
//useSelector: to select parts of the state
import {useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import Paginate from './Paginate'
import ProductCarousel from '../components/ProductCarousel'

//HOMEVIEW PRODUCTS

const HomeView = ({match}) => {
    const keyword = match.params.keyword
    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch ()

    //UseSelector 
    //1.Grab the products from the state
    //2.Pull out what we want from it(loading, err or show products) 
    //3.Display it
    const productList = useSelector(state => state.productList)
    const {loading, error, products, page, pages } = productList

    useEffect(()=> {
        dispatch(listProducts(keyword, pageNumber)) 
        //1.Make the request to the backend to get the products 
        //2.Send them through the reducer into the state
  
        }, [dispatch, keyword, pageNumber]) //it could be empty, but we pass dispatch as dependency to avoid a warning in the console

    return (
        <>
        <Meta />
        {!keyword ? <ProductCarousel/> : (<Link to='/' className='btn btn-light'>Back to Home</Link> )}
            <h1>Products</h1>
                {loading ? ( 
                <Loader /> ) 
                : error ? ( 
                <Message variant='danger'>
                    {error}
                </Message>
                ) : (
                    <>
                <Row>
                {products.map(product =>( //Loop all products
                    <Col key={product._id} //Access to each product we are looping with the id
                        sm={12} md={6} lg={4} xl={3}>
                    <Product product={product}/>
                    </Col>
                ))}
            </Row>
            <Paginate 
            pages={pages} 
            page={page} 
            keyword={keyword ? keyword : ''} />
            </>
            )}

        </>
    )
}

export default HomeView
