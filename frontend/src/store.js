import { createStore, combineReducers, applyMiddleware } from 'redux'
//createStore: function to create a store
//combineReducers: function turns an object whose values are different reducing functions into a single reducing function
//applyMiddleware => thunk
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer } from './reducers/userReducers'

//Combine Reducer for products and products list. 
//Will handle different functionality depending of the requests (success, fail,...)
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
}) 

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
    cart: { cartItems: cartItemsFromStorage },
    userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk] //all that is in the array will be passed to [...middleware]

const store = createStore
    (reducer, 
        initialState, 
        composeWithDevTools(applyMiddleware(...middleware)))

export default store