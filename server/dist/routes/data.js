"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post("/addData", (req, res) => {
    // Get data from the request body
    const { field1, field2, field3 } = req.body;
    // Save data to the database using your MySQL2 code
    // Send a response back to the client
    res.send("Data added successfully!");
});
exports.default = router;
//# sourceMappingURL=data.js.map