const express = require("express")
require('dotenv').config()

const app = express()

// const port = 3000

const PORT = process.env.PORT

app.get("/", (req, res)=>{
    res.send('Hello World!')
})

app.get("/youtube", (req, res) =>{
    res.send("Youtube has opened")
})

app.get("/Instagram", (req, res)=>{
    res.send("Instagram has opened")
})

app.listen(process.env.PORT, () =>{
    console.log(`Example app listening on port ${PORT}`);
    
})