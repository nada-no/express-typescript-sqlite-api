"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const booksRouter = require('./routes/books');
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json()); //To make express accept JSON in the body
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Express + typescript');
});
app.use('/', booksRouter);
app.listen(port, () => {
    console.log(`⚡[server]: Server is runing at http://localhost:${port}`);
});
