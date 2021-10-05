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
        <Form className="d-flex" style={{ maxWidth: '60%', align: 'justify-content-center'}} onSubmit={submitHandler} inline>
            <Form.Control 
                type='text' 
                name='q' 
                onChange={(event) => setKeyword(event.target.value)}
                placeholder='Find your products...'
                className='mr-sm-2 ml-sm-5'>
            </Form.Control>
            <Button 
            type='submit' 
            variant='outline-success' 
            className='p-2'>
                Search
                </Button>
            
        </Form>
    )
}

export default SearchBox
