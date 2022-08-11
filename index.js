const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const PORT = 5000

let filmes = require('./routes/filmes')

app.use('/filmes', filmes)

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})