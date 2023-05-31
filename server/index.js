const express = require('express')
const dotenv = require('dotenv')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema.js')
const { default: mongoose } = require('mongoose')

const app = express()
dotenv.config()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_DEV === 'development'
}))
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`connected! to mongodb`)
    } catch (err) {
        console.log(err)
    }
}

const port = process.env.PORT

app.listen(port, () => {
    connectDB()
    console.log('running on the server!')
})
