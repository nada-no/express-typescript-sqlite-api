import express, {Express, NextFunction, Request, Response, ErrorRequestHandler} from 'express';
const router = express.Router();
const books = require('../services/books');

// GET books listing
router.get('/', (req: Request,res: Response ,next: NextFunction ) => {
    try{
    res.json(books.getAll(req.query.page));
    }catch(err: any){
        console.error(`Error while getting books`, err.message);
        next(err);
    }
});


module.exports = router;