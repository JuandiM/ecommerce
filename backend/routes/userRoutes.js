import express from 'express'
import { authUser, getUserProfile, registerUser, updateUserProfile, getUsers, deleteUser, getUserById, updateUser } from '../controllers/userControllers.js'
import {protect, admin} from '../middleware/authMiddleware.js'


const router = express.Router()


router.post('/login', authUser)

//get user profile
router.route('/profile')
.get(protect, getUserProfile)
.put(protect, updateUserProfile)

//new user / admin get user /admin delete user
router.route('/')
.post(registerUser)
.get(protect, admin, getUsers)

router.route('/:id')
.delete(protect, admin, deleteUser)
.get(protect, admin, getUserById)
.put(protect, admin, updateUser)


export default router;