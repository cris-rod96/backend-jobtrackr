import express from "express";
import cors from "cors";
import logger from "morgan";
import { rootRouter } from "./routes/index.js";

const server = express();

server.use(express.json());
server.use(cors());
server.use(logger("dev"));

server.use("/api/v1", rootRouter);

export default server;
