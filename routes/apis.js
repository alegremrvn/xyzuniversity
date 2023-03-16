require('dotenv').config()

module.exports = (app) => {
    app.route('/api')
        .get((req, res) => {
            console.log(`${req.method} - ${req.ip} - ${req.path}`)
            res.json({
                message: 'hi there'
            })
        })
}