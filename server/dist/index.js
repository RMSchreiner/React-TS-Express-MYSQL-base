"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const data_1 = __importDefault(require("./routes/data"));
require("reflect-metadata");
const database_1 = require("./database");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 5000;
app.use("/api", data_1.default);
app.get("/", (req, res) => {
    res.send("Hello from Express!");
});
app.post("/api/addData", (req, res) => {
    const { userID, message, responseMessage } = req.body;
});
app.listen(PORT, () => {
    console.log(`Express server on port ${PORT}`);
});
database_1.AppDataSource.initialize()
    .then(() => {
    console.log("Connected to Database.");
})
    .catch((error) => console.log(error));
// "dev": "concurrently \"tsc -w\" \"nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts\" \"cd ../client && npm start\"",
// package.json
//# sourceMappingURL=index.js.map