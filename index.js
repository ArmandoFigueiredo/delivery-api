import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import { dbConnect } from "./config/db.config.js";
dbConnect();
import { consumerRouter } from "./routes/consumer.routes.js"

const app = express();

app.use(express.json());

// CONFIGUREM O SEUS ROTEADORES AQUI!

app.use("/consumer", consumerRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`Server up at port ${process.env.PORT}`);
});
