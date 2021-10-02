import React from 'react'
import {useState, useEffect} from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import Message from '../components/Message'
import Loader from '../components/Loader'


const ProfileView = ({location, history}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const {loading, error, user} = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const {success} = userUpdateProfile

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
          if (!user.name) {
            dispatch(getUserDetails('profile'))
          }  else {
            setName(user.name)
            setEmail(user.email)
          }
        }
    }, [dispatch, history, userInfo, user])

    const submitHandler = (event) => {
        event.preventDefault()
        if(password !== confirmPassword){
            setMessage('Passwords do not match! Try again!')
        } else {
            dispatch(updateUserProfile({id: user._id, name, email, password}))
        }
        
    }


    return (
        <Row>
            <Col md={3}>
            <h2>MY PROFILE</h2>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {success && <Message variant='success'>Profile Updated</Message>}
            {loading && <Loader />}
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

                <Form.Group controlId='confirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                        <Form.Control 
                            type='password' 
                            placeholder='Confirm your password' 
                            value={confirmPassword} 
                            onChange={(event) => 
                            setConfirmPassword(event.target.value)}>
                        </Form.Control>
                </Form.Group>

                    <Button type='submit' variant='primary'>
                        Update
                    </Button>
            </Form>
            </Col>
            <Col md={9}>
                <h2>My Orders</h2>
            </Col>
        </Row>
    )
}

export default ProfileView
