"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 8080;
app.set('views', 'dist/views');
app.set('view engine', 'ejs');
app.use(express_1.default.static('dist'));
app.use('css', express_1.default.static(__dirname + 'public/css'));
app.use('js', express_1.default.static(__dirname + 'code'));
app.get('/', (req, res) => {
    res.render('pages/Index');
});
app.listen(port, () => {
    console.info(`
[+]-----------------------------------------------------
Server Online and Listening to Port localhost:${port}
[+]-----------------------------------------------------
`);
});
