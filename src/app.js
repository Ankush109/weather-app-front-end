const path =require('path')
const express = require('express');
const hbs = require("hbs")
console.log(__dirname);

const app =express()
// define paths for express config
const pathexpress=path.join(__dirname,"../public")
const viewspath =path.join(__dirname,"../templates/views")
const partialspath = path.join(__dirname,"../templates/partials")
//handle bars engine and views location
app.set("view engine","hbs")
app.set("views",viewspath)
hbs.registerPartials(partialspath)
//set up static directory to serve
app.use(express.static(pathexpress))
app.get("",(req,res)=>{
    res.render("index",{
        title:"Weather app",
        name:"Ankush Banerjee"
    })
})
app.get("/about",(req,res)=>{
    res.render("about",{
       name:"Ankush banerjee"
    })
})
app.get("/help",(req,res)=>{
    res.render("help",{
        message:"if you need anyhelp email me at banerjeeankush184@gmail.com or call me: 6290293731",
        title:"Help",
        name:"Ankush Banerjee"
    })
})
app.get('',(req,res)=>{
    res.send("hello express")

})
// app.get("/help",(req,res)=>{
//     res.send("this page is runned by ankush banerjee")
// })
// app.get("/about",(req,res)=>{
//     res.send("<h1>weather</h1>")
// })
app.get("help/*",(req,res)=>{
    res.render("404",{
        title:"404",
        name:"Ankush Banerjee",
        errormessage:"help page does not exist"
    })
})
app.get("*",(req,res)=>{
 res.render("404page",{
     title:"404",
     name:"Ankush Banerjee",
     errormessage:"the page does not exist"
 })

})
app.listen(3000,()=>{  
    console.log("Server is running  on port 3000")
})