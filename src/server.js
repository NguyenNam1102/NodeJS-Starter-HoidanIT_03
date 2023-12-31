// const express = require('express')
import express from 'express'
import configViewEngine from './configs/viewEngine'
import initWebRoute from './route/web'
require('dotenv').config()
import connection from './configs/connectDB'

const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// setup view engine
configViewEngine(app)

// init view route
initWebRoute(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})