"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const Message_1 = require("./entities/Message");
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "rootroot",
    database: "moonroof",
    entities: [Message_1.DataEntity],
    synchronize: true
});
// AppDataSource.initialize()
// .then(() => {
//   console.log("Data Source has been initialized on Port 3306")
// })
// .catch ((err) =>  {
//    console.error("Error during Data Source Initialization", err);
// });
//# sourceMappingURL=database.js.map