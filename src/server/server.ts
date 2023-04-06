import express from 'express'
import os from 'os'

import config from './config'
console.log('config', config)

const server = express()
const port = config.PORT
const host = config.HOST

server.use(express.static("dist"))

server.set("view engine","ejs");

server.use("/", (req,res)=> {
    res.render("index",{
        initialContent: "Loading.."
    });
})


server.listen(port,host,()=>{
    console.info(`Port listing on port ${port}`),
    console.info(`Free Memory in GB ${ os.freemem() / 1024 / 1024 / 1024 }`)
})