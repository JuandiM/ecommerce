import express from 'express'
import { authUser, getUserProfile, registerUser, updateUserProfile, getUsers } from '../controllers/userControllers.js'
import {protect, admin} from '../middleware/authMiddleware.js'


const router = express.Router()


router.post('/login', authUser)

//get user profile
router.route('/profile')
.get(protect, getUserProfile)
.put(protect, updateUserProfile)

//new user
router.route('/').post(registerUser).get(protect, admin, getUsers)


export default router;