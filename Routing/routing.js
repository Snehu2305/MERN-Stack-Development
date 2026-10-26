const express = require('express')

const app = express()

PORT = 3000

app.get('/', (req, res)=>{
    res.send("It's home page");
    res.end();
})

app.get('/about', (req, res) =>{
    res.send("It's about page");
    res.end();
})
