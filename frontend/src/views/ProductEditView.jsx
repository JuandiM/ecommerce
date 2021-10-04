import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button,} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { listProductDetails, updateProduct,  } from '../actions/productActions'
import FormContainer from '../components/FormContainer'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'



const ProductEditView = ({match, history}) => {
    const productId = match.params.id

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [countInStock, setCountInStock] = useState(0)
    const [description, setDescription] = useState('')

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const {loading, error, product} = productDetails

    const productUpdate = useSelector(state => state.productUpdate)
    const {loading: loadingUpdate, error: errorUpdate, success: successUpdate} = productUpdate

    useEffect(() => {

        if(successUpdate) {
            dispatch({ type: PRODUCT_UPDATE_RESET})
            history.push('/admin/productlist')
        } else {
            if(!product.name || product._id !== productId){
                dispatch(listProductDetails(productId))
            } else {
                setName(product.name)
                setPrice(product.price)
                setImage(product.image)
                setBrand(product.brand)
                setCategory(product.category)
                setCountInStock(product.countInStock)
                setDescription(product.description)
            }
        }
       
    }, [dispatch, history, product, productId, successUpdate])

    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(updateProduct({
            _id: productId,
            name,
            price,
            image,
            brand,
            category,
            countInStock,
            description
        }))       
    }


    return (
        <>
        <Link to='/admin/productlist' className='btn btn-light my-3'> Go Back to Product List</Link>
        <FormContainer>
            <h1>Edit Product</h1>
            {loadingUpdate && <Loader />}
            {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type='name' 
                            placeholder='Enter your Name' 
                            value={name} 
                            onChange={(event) => 
                            setName(event.target.value)}>
                        </Form.Control>
                </Form.Group>

                <Form.Group controlId='price'>
                    <Form.Label>Price</Form.Label>
                        <Form.Control 
                            type='number'
                            placeholder='€ Enter price' 
                            value={price} 
                            onChange={(event) => 
                            setPrice(event.target.value)}>
                        </Form.Control>
                </Form.Group>

                <Form.Group controlId='image'>
                    <Form.Label>Image</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Enter image url' 
                            value={image} 
                            onChange={(event) => 
                            setImage(event.target.value)}>
                        </Form.Control>
                </Form.Group>

                <Form.Group controlId='brand'>
                <Form.Label>Brand</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Product brand' 
                            value={brand} 
                            onChange={(event) => 
                            setBrand(event.target.value)}>
                        </Form.Control>
                </Form.Group>

                <Form.Group controlId='category'>
                <Form.Label>Category</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Product Category' 
                            value={category} 
                            onChange={(event) => 
                            setCategory(event.target.value)}>
                        </Form.Control>
                </Form.Group>

                <Form.Group controlId='countInStock'>
                <Form.Label>Count In Stock</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='In Stock' 
                            value={countInStock} 
                            onChange={(event) => 
                            setCountInStock(event.target.value)}>
                        </Form.Control>
                </Form.Group>

                  <Form.Group controlId='description'>
                <Form.Label>Description</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Product description' 
                            value={description} 
                            onChange={(event) => 
                            setDescription(event.target.value)}>
                        </Form.Control>
                </Form.Group>

                    <Button type='submit' variant='primary'>
                        Update Product
                    </Button>
            </Form>

            )}
            
        </FormContainer>
        </>
       
    )
}

export default ProductEditView
