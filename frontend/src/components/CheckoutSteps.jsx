import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4}) => {
    return (
        <Nav className='justify-content-md-center mb-4 steps'>
          <Nav.Item>
              {step1 ? (<LinkContainer to='/login'>
                  <Nav.Link>1 Sign In</Nav.Link>
              </LinkContainer>
              ) : (
              <Nav.Link disabled>1 Sign In</Nav.Link>)}
          </Nav.Item>

            <Nav.Item>
              {step2 ? (<LinkContainer to='/shipping'>
                  <Nav.Link>2 Shipping</Nav.Link>
              </LinkContainer>
              ) : (
              <Nav.Link disabled>2 Shipping</Nav.Link>)}
            </Nav.Item>

            <Nav.Item>
              {step3 ? (<LinkContainer to='/payment'>
                  <Nav.Link>3 Payment</Nav.Link>
              </LinkContainer>
              ) : (
              <Nav.Link disabled>3 Payment</Nav.Link>)}
            </Nav.Item> 

            <Nav.Item>
              {step4 ? (<LinkContainer to='/placeorder'>
                  <Nav.Link>4 Place Order</Nav.Link>
              </LinkContainer>
              ) : (
              <Nav.Link disabled>4 Place Order</Nav.Link>)}
            </Nav.Item>  

        </Nav>
    )
}

export default CheckoutSteps
