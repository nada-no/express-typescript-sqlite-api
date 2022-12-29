"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const books = require('../services/books');
// GET books listing
router.get('/books', (req, res, next) => {
    try {
        res.json(books.getAll(req.query.page));
    }
    catch (err) {
        console.error(`Error while getting books`, err.message);
        next(err);
    }
});
router.post('/newbook', (req, res, next) => {
    try {
        res.json(books.create(req.body));
    }
    catch (err) {
        console.error(`Error while getting books`, err.message);
        next(err);
    }
});
router.delete('/deletebook', (req, res, next) => {
    try {
        res.json(books.deletion(req.body.id));
    }
    catch (err) {
        console.error(`Error while deleting book`, err.message);
        next(err);
    }
});
router.put('/updatebook', (req, res, next) => {
    try {
        res.json(books.update(req.body));
    }
    catch (err) {
        console.error(`Error while updating book`, err.message);
        next(err);
    }
});
module.exports = router;
