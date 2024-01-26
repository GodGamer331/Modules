const express = require("express")
const app = express()
const routes = require('./api/routes/route')

app.use('/modules', routes)

app.use((req, res, next) => {
    const error = new Error("Not found")
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            content: error.message
        }
    })
})

module.exports = app