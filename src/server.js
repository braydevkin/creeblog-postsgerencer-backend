const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes =  require('./routes')


const app = express()

//START DB
mongoose.connect('mongodb://localhost:27017/blogdb', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(3333)