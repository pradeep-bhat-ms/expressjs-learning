import express from 'express';
import route from './routes.js';

const app = express();
const port = 80;

app.use('/', route); //Whenever a request starts with /, send it to this router."

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});