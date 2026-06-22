import express from 'express'
const app=express();
const port=80;

app.get('/',(req,res)=>{
    res.send("welcome to home page")
})
app.get ('/about',(req,res)=>{
    res.send("welcome to about page ")
})
app.get('/htmlpage',(req,res)=>{
    res.send(`<h1>hi how are you</h1>`)
})
app.get('/user',(req,res)=>{
    res.send({
        "id":1,
        "age":22
    })
})

app.listen(port,()=>{
    console.log(`server running in ${port}`);
    
})