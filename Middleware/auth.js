// import express from 'express'
// const app=express()
// const port=80;

// function authent(req,res,next)
// {
//     // const a=req.header.authorization;
//     let a="1234";

//     if(a==="1234")
//     {
//         return res.send("Authorized")
//     }
//     else
//     {
//         return res.send("Invalid")
//     }
//     next()
// }

// app.get('/auth',authent,(req,res)=>{
//     res.send("Authorizedd")
// })
// app.listen(port,()=>{
//     console.log(`server is running in ${port}`);
// })

/////////////////////

// import express from 'express'
// const app=express()
// const port=80;

// function admin(req,res,next)
// {
//     const b="admin"
//     if(b==="adminn") // adminnnn
//     {
//         return res.send("admin is logged")
//     }
//     else
//     {
//          res.send("invalid user")
//     }
//     next()
// }

// app.get('/admin',admin,(req,res)=>{
//     res.send("validdd")
//     // console.log("hiiiiiiiiiii");
    
// })

// app.listen(port,()=>{
//     console.log(`server is running in ${port}`);
    
// })


/////////////////////////////////////
import express from 'express'
const app=express()
const port=80;

function admin(req,res,next){
    const b = "admin";

    if (b === "admin")  // 
        {
        next();      // Continue to the route
    } else {
        return res.send("Invalid user");
    }
}


app.get('/admin', admin, (req,res)=>{
    res.send("Admin is logged in");
});

app.listen(port,()=>{
    console.log(`server is running in ${port}`);
    
})