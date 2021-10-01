import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import {addToCart} from '../actions/cartActions'

const CartView = ({ match, location, history}) => {
    const productId = match.params.id




    return (
        <div>
            
        </div>
    )
}

export default CartView
