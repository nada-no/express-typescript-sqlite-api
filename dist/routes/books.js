"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const books = require('../services/books');
// GET books listing
router.get('/', (req, res, next) => {
    try {
        res.json(books.getAll(req.query.page));
    }
    catch (err) {
        console.error(`Error while getting books`, err.message);
        next(err);
    }
});
module.exports = router;
