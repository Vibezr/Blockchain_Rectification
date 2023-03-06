const express = require("express");
const connectDB = require("./db/connect");
const bodyparser = require("body-parser")
require('dotenv').config();
const routes = require("./router/routes")
const app = express();
const Key = require("./model/key")



app.use(express.static('./public'))
app.use(express.json())
app.use(bodyparser.urlencoded({extended: false}))

app.use("/api/v1/key", routes)

app.post('/', async(req, res) => {
    const data = new Key(req.body)
    await data.save()
    res.sendFile(__dirname + "/index.html")
})


const port = process.env.PORT || 3000


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start()