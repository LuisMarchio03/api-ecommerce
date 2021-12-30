import "dotenv/config";

import express from "express";
import cors from "cors";

import { routes } from "./routes";

import "reflect-metadata";
import "./database";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(5555, () => {
  console.log("Server is running on port 3333");
});
