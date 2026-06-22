import express from 'express'
const app=express();
const port=80;

app.get('/products/:id',(req,res)=>{
    res.send(`the product id is  ${req.params.id}`)
})
app.get('data/:username/:course',(req,res)=>{
    res.send(`the username ${req.params.username}<br>  and the id is ${req.params.course}`)
})

app.listen(port,()=>{
    console.log(`server is running in ${port}`);
    
})