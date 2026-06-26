import express from 'express';
const route = express.Router();


route.use((req, res, next) => {
    console.log("Router middleware 1");
    next();
});

route.use((req, res, next) => {
    console.log("Router Middleware 2");
    next();
});

route.get('/fetch', (req, res) => {
    res.send("Fetched data");
});


route.get('/fetch1', (req, res) => {
    res.send("Fetched 1st  data");
});
export default route;