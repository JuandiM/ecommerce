import express from 'express'
import { getProducts, getProductById, deleteProduct, updateProduct, createProduct} from '../controllers/productControllers.js'
import {protect, admin} from '../middleware/authMiddleware.js'

const router = express.Router()

//Get all products from productControllers
router.route('/')
.get(getProducts)
.post(protect, admin, createProduct)

//Get product by Id from productControllers
router.route('/:id')
.get(getProductById)
.delete(protect, admin, deleteProduct)
.put(protect, admin, updateProduct)


export default router

