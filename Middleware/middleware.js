import express from 'express'
const app=express()

const port=80;

// function demo(req,res,next){
//     console.log(`${req.url} and ${req.method}`);
//     console.log("hello");
//     next();   
//     // output is
// //  / and GET
// // hello
// // how are you
//     // // if u  not written next the output is 
//     // server is running on 80
//     // / and GET
//      // hello
// }

// function test(req,res,next){
//     console.log("how are you");
// }
/////////app.use
// app.use(demo);
// app.use(test);

// app.get('/',(req,res)=>{
//     res.send("get the data")
// })
// app.listen(port,()=>{
// console.log(`server is running on ${port}`)
// })

/////////////////////////////////////////// inside the app.get no app.use

// function demo(req,res,next){
//     console.log(`${req.url} and ${req.method}`);
//     console.log("hello");
//     next();   
// }

// function test(req,res,next){
//     console.log("how are you");
// }

// app.get('/',demo,test,(req,res)=>{
//     res.send("get the data")
// })
// app.listen(port,()=>{
// console.log(`server is running on ${port}`)
// })

/////////////////////////////

// function demo(req,res,next){
//     console.log("demo");
//     next()
// }
// function demo1(req,res,next){
//     console.log("demo1");
// }
// app.get('/',demo,demo1,(req,res)=>{
//     res.send("get the data")
// })
// app.listen(port,()=>{
// console.log(`server is running on ${port}`)
// })

// server is running on 80
// demo
// demo1

/////////////////////////////////////////

app.use('/',(req,res,next)=>{
    console.log("test1");
    next()
})
app.use('/',(req,res,next)=>{
    console.log("test2");
    
})

app.get('/admin',(req,res)=>{
    res.send("get the data")
})

app.listen(port,()=>{
    console.log(`server running ${port}`);
    
})