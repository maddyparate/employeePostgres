const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors")

const corsOptions = {
    origin: "http://localhost:3000"
}


const db = require('./models')
const router = require('./routes/user.route')
db.sequelize.sync({force:true}).then(() => {
    console.log("Drop existing user and re-sync database")
})

const app = express()
app.use(bodyParser.json())
app.use(cors(corsOptions))

app.listen(8080, ()=> {
    console.log("Succesfully running on port 8080")
})

app.use('/api/users', router)