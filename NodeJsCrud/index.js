var bodyParser = require('body-parser')
const express=require('express');
const app=express();
app.set("view engine","ejs");
app.use(express.static("public"))
const port=3000;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/',(req,res)=>{
   // res.sendFile('./views/index.ejs',{root:__dirname});

    res.render("index",{title:"Home"})
})
app.get('/about',(req,res)=>{
    res.render("about",{title:"about"})
})
app.get('/login',(req,res)=>{
    res.render("login",{title:"login"})
})
app.get('/about-us',(req,res)=>{
    res.redirect('/about')
})
const users=require("./routes/users");
app.use("/users",users);

app.use((req,res,next)=>{

    res.status(404).render("404",{title:"404"});

})


