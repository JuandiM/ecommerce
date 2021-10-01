import express from 'express'
import { authUser, getUserProfile, registerUser } from '../controllers/userControllers.js'
import {protect} from '../middleware/authMiddleware.js'


const router = express.Router()


router.post('/login', authUser)

//get user profile
router.route('/profile').get(protect, getUserProfile)

//new user
router.route('/').post(registerUser)


export default router;