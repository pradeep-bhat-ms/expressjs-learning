import express from 'express'
const app=express();
const port=80;

// app.get('/search',(req,res)=>{
//     res.send(`the name is ${req.query.name}`) // in url http://localhost/search?name="pradeep"
// })
// req.params → Route parameters (/user/101)
// req.query → Search/query parameters (/search?name=Pradeep)


app.get('/search',(req,res)=>{
    const {name,age,place}=req.query
    res.send(`the name is ${name} <br> and age is ${age}  and the place is ${place} `)
})
// in url http://localhost/search?name=pradeep&age=22&place=shimoga

app.get('/products',(req,res)=>{
    res.send({
    id:req.query.id,
    name:req.query.name,
    age:req.query.age
    })
})
//  in urlhttp://localhost/products?id=10&name=pradeep&age=2


app.listen(port,()=>{
    console.log(`server is running in ${port}`);
    
})