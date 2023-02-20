const express = require('express')
require('dotenv').config();

const app = express()

const PORT = process.env.DEV_PORT
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})