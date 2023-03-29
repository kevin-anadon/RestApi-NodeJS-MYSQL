const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors")

const { dbConnect } = require("./config/mysql")
const { User } = require("./models")

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

// Cors
app.use(cors())

// Routes (Dynamic routes)
app.use("/api", require("./routes"))

// Listen
const server = app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
})

dbConnect()

module.exports = { app, server }
