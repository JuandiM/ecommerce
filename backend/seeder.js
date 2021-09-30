import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

//import data on mongoDB running >npm run data:import< // only should be done at beginning
const importData = async () => {
    try {
        await User.deleteMany()
        await Order.deleteMany()
        await Product.deleteMany()

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map(product => {
            return {...product, user: adminUser}
        })

        await Product.insertMany(sampleProducts)//all the products data including the admin

        console.log('Data Imported')
        process.exit()
    } catch (error) {
        console.log(`${error}`)
        process.exit(1)
        
    }
}
//import data on mongoDB running >npm run data:destroy< // good for testing to delete all
const destroyData = async () => {
    try {
        await User.deleteMany()
        await Order.deleteMany()
        await Product.deleteMany()

        console.log('Data Destroyed')
        process.exit()
    } catch (error) {
        console.log(`${error}`)
        process.exit(1)
        
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}