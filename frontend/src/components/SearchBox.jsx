import React from 'react'
import {useState} from 'react'
import {Form, Button} from 'react-bootstrap'


const SearchBox = ({history}) => {
    const [keyword, setKeyword] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()
        if(keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {
            history.push('/')
        }
    }

    return (
        <Form className="d-flex align-items-center" style={{ maxWidth: 'auto'}} onSubmit={submitHandler} inline>
            <Form.Control 
                type='text' 
                name='q' 
                onChange={(event) => setKeyword(event.target.value)}
                placeholder='Find your products...'
                className='mr-sm-2 ml-sm-10'>
            </Form.Control>
            <Button 
            type='submit' 
            variant='outline-success' 
            className='button1 p-2'>
                Search
                </Button>
            
        </Form>
    )
}

export default SearchBox
