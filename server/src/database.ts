import { DataEntity } from "./entities/Message";
import {DataSource} from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "rootroot",
    database: "moonroof",
    entities: [DataEntity],
    synchronize: true
  });

// AppDataSource.initialize()
// .then(() => {
//   console.log("Data Source has been initialized on Port 3306")
// })
// .catch ((err) =>  {
//    console.error("Error during Data Source Initialization", err);
// });