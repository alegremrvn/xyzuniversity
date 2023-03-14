require('dotenv').config()
const express = require('express'),
    app = express()

app.use('/public', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    console.log(`${req.method} - ${req.ip} - ${req.path}`)
    res.sendFile(__dirname + '/views/index.html')
})

app.listen(process.env.PORT, () => {
    console.log(`Now listening at ${process.env.PORT}...`)
})