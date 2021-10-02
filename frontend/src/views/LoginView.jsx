import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'
import Message from '../components/Message'


const LoginView = ({location, history}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {loading, error, userInfo} = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(()=>{
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(login(email, password))
    }


    return (
        <FormContainer>
            <h1>Sign In</h1>
            {error && <Message variant='danger'>{error}</Message>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                            type='email' 
                            placeholder='example@example.com' 
                            value={email} 
                            onChange={(event) => 
                            setEmail(event.target.value)}>
                        </Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type='password' 
                            placeholder='Enter your password' 
                            value={password} 
                            onChange={(event) => 
                            setPassword(event.target.value)}>
                        </Form.Control>
                </Form.Group>

                    <Button type='submit' variant='primary'>
                        Sign In
                    </Button>
            </Form>
            <Row className='py-3'>
                <Col>
                New user?{' '} 
                <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                    Register
                </Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default LoginView
