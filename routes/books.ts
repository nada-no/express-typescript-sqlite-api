import express, { Express, NextFunction, Request, Response, ErrorRequestHandler } from 'express';
const router = express.Router();
const books = require('../services/books');

// GET books listing
router.get('/books', (req: Request, res: Response, next: NextFunction) => {
    try {
        res.json(books.getAll(req.query.page));
    } catch (err: any) {
        console.error(`Error while getting books`, err.message);
        next(err);
    }
});

router.post('/newbook', (req: Request, res: Response, next: NextFunction) => {
    try {
        res.json(books.create(req.body));
    } catch (err: any) {
        console.error(`Error while getting books`, err.message);
        next(err);
    }
});

router.delete('/deletebook', (req: Request, res: Response, next: NextFunction) => {
    try {
        res.json(books.deletion(req.body.id));
    } catch (err: any) {
        console.error(`Error while deleting book`, err.message);
        next(err);
    }
});

router.put('/updatebook', (req: Request, res: Response, next: NextFunction) => {
    try{
        res.json(books.update(req.body));
    }catch(err:any){
        console.error(`Error while updating book`, err.message);
        next(err);
    }
});


module.exports = router;