require('dotenv').config()
const express = require('express'),
    app = express()
    apis = require('./routes/apis')

app.use('/public', express.static(__dirname + '/public'))

apis(app)

app.get('/', (req, res) => {
    console.log(`${req.method} - ${req.ip} - ${req.path}`)
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/degreeprograms', (req, res) => {
    console.log(`${req.method} - ${req.ip} - ${req.path}`)
    res.sendFile(__dirname + '/views/degree-programs.html')
})

app.use((req, res) => {
    console.log(`${req.method} - ${req.ip} - ${req.path}`)
    res.status(404)
        .type('text')
        .send('Not Found')
})

app.listen(process.env.PORT, () => {
    console.log(`Now listening at ${process.env.PORT}...`)
})