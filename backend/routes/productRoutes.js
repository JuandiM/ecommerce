import express from 'express'
import { getProducts, getProductById} from '../controllers/productControllers.js'
const router = express.Router()

//Get all products from productControllers
router.route('/').get(getProducts)

//Get product by Id from productControllers
router.route('/:id').get(getProductById)

export default router

