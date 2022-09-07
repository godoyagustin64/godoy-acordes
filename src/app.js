const express = require("express");
const path = require("path");
const app = express();

//carpeta PUBLIC static
app.use(express.static("public"));




app.get("/", (req,res)=>{
    res.send("Estoy en home");
});

app.get("/detail-product", (req,res)=>{
    res.send("Estoy en detail-product");
});

app.get("/cart", (req,res)=>{
    res.send("Estoy en login");
});

app.get("/register", (req,res)=>{
    res.send("Estoy en register");
});

app.get("/login", (req,res)=>{
    res.send("Estoy en login");
});




app.listen(3000, () => console.log(`Servidor en puerto 3000`));