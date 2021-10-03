import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'



dotenv.config()

connectDB()

const app = express ()

//get json data from the body
app.use(express.json())

//API GET ROUTES
app.get ('/', (req, res) => {
    res.send ('API is working...')
})

app.use ('/api/products', productRoutes) 
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

//PORT CONFIG
const PORT = process.env.PORT || 5000


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))