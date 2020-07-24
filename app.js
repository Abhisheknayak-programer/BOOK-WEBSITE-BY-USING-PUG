const express =require("express");
const path = require("path");
const hostname = "127.0.0.1";
const port = 80;
const app = express();


app.use("/static",express.static("static"));

app.use(express.urlencoded());
app.set("view engine","pug");
app.set("views",path.join(__dirname,"views"))

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


app.get("/",(req,res)=>{
    res.status(200).render("home.pug");
});


app.get("/contact",(req,res)=>{
    res.status(200).render("contact.pug");
});

app.get("/about",(req,res)=>{
    res.status(200).render("about.pug");
});

app.get("/services",(req,res)=>{
    res.status(200).render("services.pug");
});

app.post("/contact2",(req,res)=>{
    res.status(200).render("contact.pug",{content:"We Will Contact You Soon"});
});

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
app.listen(port,hostname,()=>{
    console.log(`The Server is Running At http://${hostname}:${port}/`)
});