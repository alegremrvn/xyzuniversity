require('dotenv').config()
const express = require('express'),
    app = express()

app.use('/public', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    console.log(`${req.method} - ${req.ip} - ${req.path}`)
    res.sendFile(__dirname + '/views/index.html')
})

app.use((req, res) => {
    res.status(404)
        .type('text')
        .send('Not Found')
})

app.listen(process.env.PORT, () => {
    console.log(`Now listening at ${process.env.PORT}...`)
})