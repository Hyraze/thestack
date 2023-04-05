import express from 'express'
const server = express()
const port = 8080

server.use(express.static("dist"))

server.set("view engine","ejs");

server.use("/", (req,res)=> {
    res.render("Hello World");
})


server.listen(port,"0.0.0.0",()=>{
    console.info(`Port listing on port ${port}`)
})