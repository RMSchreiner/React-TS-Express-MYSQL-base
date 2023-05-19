require('dotenv').config();

import express from "express";
import{routes} from "./routes/routes."
import "reflect-metadata";
import { AppDataSource } from "./database";
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT =  5000;

app.listen(PORT,() => {
  console.log(`Express server on port ${PORT}`);
});

AppDataSource.initialize()
  .then(() => {
    console.log("Connected to Database.");
  })
  .catch((error) => console.log(error));

  routes(app);

// "dev": "concurrently \"tsc -w\" \"nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts\" \"cd ../client && npm start\"",
// package.json