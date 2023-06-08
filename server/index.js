const express = require('express')
const dotenv = require('dotenv')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema.js')
const { default: mongoose } = require('mongoose')
const cors = require('cors')

const app = express()
dotenv.config()



// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });
app.use(cors());
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
    console.log('listening to the port ... ')
})
