import React from 'react'
import {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import {saveShippingAddress} from '../actions/cartActions'


const ShippingView = ({history}) => {

    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const dispatch = useDispatch()

    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(saveShippingAddress({address, city, postalCode, country}))
        history.push('/payment')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h2>Shipping</h2>
            <Form onSubmit={submitHandler}>
            <Form.Group controlId='address'>
                    <Form.Label>Address</Form.Label>
                        <Form.Control 
                            type='text' 
                            placeholder='Enter your Address' 
                            value={address}
                            required 
                            onChange={(event) => 
                            setAddress(event.target.value)}>
                        </Form.Control>
                </Form.Group>

                <Form.Group controlId='city'>
                    <Form.Label>City</Form.Label>
                        <Form.Control 
                            type='text' 
                            placeholder='Enter your City' 
                            value={city}
                            required 
                            onChange={(event) => 
                            setCity(event.target.value)}>
                        </Form.Control>
                </Form.Group>

                <Form.Group controlId='postal code'>
                    <Form.Label>Postal Code</Form.Label>
                        <Form.Control 
                            type='text' 
                            placeholder='Enter your Postal Code' 
                            value={postalCode}
                            required 
                            onChange={(event) => 
                            setPostalCode(event.target.value)}>
                        </Form.Control>
                </Form.Group>

                <Form.Group controlId='country'>
                    <Form.Label>Country</Form.Label>
                        <Form.Control 
                            type='text' 
                            placeholder='Enter your Country' 
                            value={country}
                            required 
                            onChange={(event) => 
                            setCountry(event.target.value)}>
                        </Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Continue
                </Button>

            </Form>
        </FormContainer>
    )
}

export default ShippingView
