const express = require('express')

const app =  express()

//middleware

app.use("/hola",(req,res,next)=>{
    console.log("entering in the first middleware")
    res.send("Este es un </br> HOLA")
    // next() this for the second point of the assignment
})

app.use("/",(req,res,next)=>{
    console.log("entering in the second middleware")
    res.send("Esta es la pagina principal")

})

// server

app.listen(3000)