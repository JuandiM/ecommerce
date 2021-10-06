import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button,} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { getUserDetails, updateUser } from '../actions/userActions'
import FormContainer from '../components/FormContainer'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { USER_UPDATE_RESET } from '../constants/userConstants'


const UserEditView = ({match, history}) => {
    const userId = match.params.id

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const {loading, error, user} = userDetails

    const userUpdate = useSelector(state => state.userUpdate)
    const {loading: loadingUpdate, error: errorUpdate, success: successUpdate} = userUpdate

    useEffect(() => {
        if (successUpdate) {
            dispatch({type: USER_UPDATE_RESET})
            history.push('/admin/userlist')
        } else {
            if(!user.name || user._id !== userId){
                    dispatch(getUserDetails(userId))
                } else {
                    setName(user.name)
                    setEmail(user.email)
                    setIsAdmin(user.isAdmin)
                }
        }
       
    }, [dispatch, history, user, userId, successUpdate])

    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(updateUser({_id: userId, name, email, isAdmin}))
        
    }


    return (
        <>
        <Link to='/admin/userlist' className='btn btn-light my-3'> Go Back to User List</Link>
        <FormContainer>
            <h1>Edit User</h1>
            {loadingUpdate && <Loader />}
            {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
            <Form onSubmit={submitHandler}>
                <Form.Group className='mt-3' controlId='name'>
                    <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type='name' 
                            placeholder='Enter your Name' 
                            value={name} 
                            onChange={(event) => 
                            setName(event.target.value)}>
                        </Form.Control>
                </Form.Group>

                <Form.Group className='mt-3' controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                            type='email' 
                            placeholder='example@example.com' 
                            value={email} 
                            onChange={(event) => 
                            setEmail(event.target.value)}>
                        </Form.Control>
                </Form.Group>

                <Form.Group className='mt-3' controlId='isadmin'>
                        <Form.Check 
                            type='checkbox'
                            label='Is Admin' 
                            checked={isAdmin}
                            onChange={(event) => 
                            setIsAdmin(event.target.checked)}>
                        </Form.Check>
                </Form.Group>

                    <Button className='button1 mt-3' type='submit' variant='primary'>
                        Update account
                    </Button>
            </Form>

            )}
            
        </FormContainer>
        </>
       
    )
}

export default UserEditView
