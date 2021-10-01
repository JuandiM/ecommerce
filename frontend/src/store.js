import { createStore, combineReducers, applyMiddleware } from 'redux'
//createStore: function to create a store
//combineReducers: function turns an object whose values are different reducing functions into a single reducing function
//applyMiddleware => thunk
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'

//Combine Reducer for products and products list. 
//Will handle different functionality depending of the requests (success, fail,...)
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
}) 

const cartItemsFromStorage = localStorage.getItem('carItems') 
    ? JSON.parse(localStorage.getItem('carItems')) 
    : []

const initialState = {
    cart: { cartItems: cartItemsFromStorage},
}

const middleware = [thunk] //all that is in the array will be passed to [...middleware]

const store = createStore
    (reducer, 
        initialState, 
        composeWithDevTools(applyMiddleware(...middleware)))

export default store