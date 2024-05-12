import express from "express";
import cors from "cors";
import logger from "morgan";

const server = express();

server.use(express.json());
server.use(cors());
server.use(logger("dev"));

export default server;
