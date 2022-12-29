import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
const booksRouter = require('./routes/books');

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response)=>{
    res.send('Express + typescript');
});

app.use('/books', booksRouter);

app.listen(port, ()=>{
    console.log(`⚡[server]: Server is runing at http://localhost:${port}`);
});