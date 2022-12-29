import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
const booksRouter = require('./routes/books');

dotenv.config();

const app: Express = express();
app.use(express.json());       //To make express accept JSON in the body
const port = process.env.PORT;

app.get('/', (req: Request, res: Response)=>{
    res.send('Express + typescript');
});

app.use('/', booksRouter);

app.listen(port, ()=>{
    console.log(`⚡[server]: Server is runing at http://localhost:${port}`);
});