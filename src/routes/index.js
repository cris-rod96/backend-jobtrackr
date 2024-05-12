import { Router } from "express";
import { postulationRouter } from "./postulations/index.js";

const rootRouter = Router();

rootRouter.use("/postulations", postulationRouter);

export { rootRouter };
