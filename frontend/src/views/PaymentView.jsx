import React from 'react'
import {useState} from 'react'
import {Form, Button, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import {savePaymentMethod} from '../actions/cartActions'


const PaymentView = ({history}) => {

    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart

    if(!shippingAddress) {
        history.push('/shipping')
    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    const dispatch = useDispatch()

    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3/>
            <h2>Payment Method</h2>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>
                    Select Method
                    </Form.Label>
                <Col>
                <Form.Check 
                type='radio' 
                label='PayPal or Credit/Debit Card' 
                id='Paypal' name='paymentMethod' 
                value='PayPal' checked 
                onChange={(event) => setPaymentMethod(event.target.value)}>
                </Form.Check>
      {/*           <Form.Check 
                type='radio' 
                label='Stripe' 
                id='Stripe' name='paymentMethod' 
                value='Stripe' checked 
                onChange={(event) => setPaymentMethod(event.target.value)}>
                </Form.Check>
                <Form.Check 
                type='radio' 
                label='Bank Transfer' 
                id='Bank Transfer' name='paymentMethod' 
                value='Bank Transfer' checked 
                onChange={(event) => setPaymentMethod(event.target.value)}>
                </Form.Check> */}
                </Col>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Continue
                </Button>

            </Form>
        </FormContainer>
    )
}

export default PaymentView

