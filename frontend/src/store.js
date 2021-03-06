import { createStore, combineReducers, applyMiddleware } from 'redux'
//createStore: function to create a store
//combineReducers: function turns an object whose values are different reducing functions into a single reducing function
//applyMiddleware => thunk
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer, productDeleteReducer, productCreateReducer, productUpdateReducer, productReviewCreateReducer, productTopRatedReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer, userListReducer, userDeleteReducer, userUpdateReducer } from './reducers/userReducers'
import { orderCreateReducer, orderDeliverReducer, orderDetailsReducer, orderListMyReducer, orderListReducer, orderPayReducer } from './reducers/orderReducers'

//Combine Reducer for products and products list. 
//Will handle different functionality depending of the requests (success, fail,...)
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productReviewCreate: productReviewCreateReducer,
    productTopRated: productTopRatedReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderDeliver: orderDeliverReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,
    
}) 

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const shippingAddressStorage = localStorage.getItem('shippingAddress')
? JSON.parse(localStorage.getItem('shippingAddress'))
: {}

const paymentMethodFromStorage = localStorage.getItem('paymentMethod')
? JSON.parse(localStorage.getItem('paymentMethod'))
: {}

const initialState = {
    cart: { 
    cartItems: cartItemsFromStorage, 
    shippingAddress: shippingAddressStorage,
    paymentMethod: paymentMethodFromStorage },
   
    userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk] //all that is in the array will be passed to [...middleware]

const store = createStore
    (reducer, 
        initialState, 
        composeWithDevTools(applyMiddleware(...middleware)))

export default store