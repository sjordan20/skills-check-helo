require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')

const ctrl = require('./controller')

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

const app = express()
app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db)
    console.log(`||---DB is here to party---||`)
})

app.listen(SERVER_PORT, () => console.log(`||-----Working on ${SERVER_PORT}----||`))