import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'


dotenv.config()

connectDB()

const app = express ()

//API GET ROUTES
app.get ('/', (req, res) => {
    res.send ('API is working...')
})

//link api/products to productRoutes
app.use ('/api/products', productRoutes) 



//PORT CONFIG
const PORT = process.env.PORT || 5000


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))