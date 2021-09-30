import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import products from './data/products.js'


dotenv.config()

connectDB()

const app = express ()

//API GET ROUTES
app.get ('/', (req, res) => {
    res.send ('API is working...')
})

//All products
app.get('/api/products', (req, res) => {
    res.json(products)
})

//Each product by ID
app.get('/api/products/:id', (req, res) => {
    const product = products.find(product => product._id === req.params.id)
    res.json(product)
})

//PORT CONFIG
const PORT = process.env.PORT || 5000


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))