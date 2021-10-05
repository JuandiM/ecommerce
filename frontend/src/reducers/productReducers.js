import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAIL, PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_SUCCESS, PRODUCT_CREATE_FAIL, PRODUCT_CREATE_RESET, PRODUCT_UPDATE_REQUEST, PRODUCT_UPDATE_SUCCESS, PRODUCT_UPDATE_FAIL, PRODUCT_UPDATE_RESET, PRODUCT_CREATE_REVIEW_REQUEST, PRODUCT_CREATE_REVIEW_SUCCESS, PRODUCT_CREATE_REVIEW_FAIL, PRODUCT_CREATE_REVIEW_RESET} from '../constants/productConstants'
import {PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL} from '../constants/productConstants'


//The reducers take the initial state and an action that we dispatch the action to the reducer -> an object with a type
//It also have a payload from the products we fetch from the server
//We have to create the ACTION FUNCTION on action folder
//And we need to add the Reducers into the STORE

//Reducer for all our products
export const productListReducer = 
    (state = {products: []}, 
        action) => {
            switch (action.type) {
                case PRODUCT_LIST_REQUEST:
                    return {loading: true, products: []}
                case PRODUCT_LIST_SUCCESS:
                    return {loading: false, products: action.payload} //if its successful it will send the data to the payload
                case PRODUCT_LIST_FAIL:
                    return {loading: false, error: action.payload}
                default:
                    return state
    }
}

//Reducer for each product
export const productDetailsReducer = 
    (state = { product: {reviews: [] } }, 
        action) => {
            switch (action.type) {
                case PRODUCT_DETAILS_REQUEST:
                    return {loading: true, ...state}
                case PRODUCT_DETAILS_SUCCESS:
                    return {loading: false, product: action.payload}
                case PRODUCT_DETAILS_FAIL:
                    return {loading: false, error: action.payload}
                default:
                    return state
    }
}

export const productDeleteReducer = 
    (state = { }, 
        action) => {
            switch (action.type) {
                case PRODUCT_DELETE_REQUEST:
                    return {loading: true,}
                case PRODUCT_DELETE_SUCCESS:
                    return {loading: false, success: true}
                case PRODUCT_DELETE_FAIL:
                    return {loading: false, error: action.payload}
                default:
                    return state
    }
}

export const productCreateReducer = 
    (state = {}, 
        action) => {
            switch (action.type) {
                case PRODUCT_CREATE_REQUEST:
                    return {loading: true,}
                case PRODUCT_CREATE_SUCCESS:
                    return {loading: false, success: true, product: action.payload}
                case PRODUCT_CREATE_FAIL:
                    return {loading: false, error: action.payload}
                case PRODUCT_CREATE_RESET:
                    return {}
                default:
                    return state
    }
}

export const productUpdateReducer = 
    (state = {product: {}}, 
        action) => {
            switch (action.type) {
                case PRODUCT_UPDATE_REQUEST:
                    return {loading: true,}
                case PRODUCT_UPDATE_SUCCESS:
                    return {loading: false, success: true, product: action.payload}
                case PRODUCT_UPDATE_FAIL:
                    return {loading: false, error: action.payload}
                case PRODUCT_UPDATE_RESET:
                    return { product: {}}
                default:
                    return state
    }
}

export const productReviewCreateReducer = 
    (state = {}, 
        action) => {
            switch (action.type) {
                case PRODUCT_CREATE_REVIEW_REQUEST:
                    return {loading: true,}
                case PRODUCT_CREATE_REVIEW_SUCCESS:
                    return {loading: false, success: true}
                case PRODUCT_CREATE_REVIEW_FAIL:
                    return {loading: false, error: action.payload}
                case PRODUCT_CREATE_REVIEW_RESET:
                    return {}
                default:
                    return state
    }
}