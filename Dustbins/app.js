const express = require('express');
const socket = require('socket.io')
const http = require('http')
const path = require('path')

const app = express()
const server = http.createServer(app)
const io = socket(server)


app.use(express.static(path.join(__dirname,'public')))

server.listen(3000,err=>{
    if(err){
        throw err
    }
    console.log("Server started at port 3000")
})