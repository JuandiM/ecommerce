import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from '../constants/productConstants'
import {PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL} from '../constants/productConstants'
import axios from 'axios'

//Redux Actions: JS Object with a type field. Event that describes something that happened in the application.

//Dispatch the actions (PRODUCT_LIST...) for the list of products
export const listProducts = () => async (dispatch) => { //Redux thunk allows us to add a function within a function
try {
    dispatch({type: PRODUCT_LIST_REQUEST}) //will call the reducer

    const {data} = await axios.get('/api/products')

    dispatch ({
        type: PRODUCT_LIST_SUCCESS,
        payload: data
    })
} catch (error) {
    dispatch({
        type: PRODUCT_LIST_FAIL,
        payload: error.response 
        && error.response.data.message 
        ? error.response.data.message 
        : error.message,
    })
}
}

//Dispatch the actions (PRODUCT_DETAILS_SUCCESS...) for the product details
export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST})
    
        const {data} = await axios.get(`/api/products/${id}`)
    
        dispatch ({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response 
            && error.response.data.message 
            ? error.response.data.message 
            : error.message,
        })
    }
    }
