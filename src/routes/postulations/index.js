import { Router } from "express";
import { postulationControllers } from "../../controllers/index.js";

const postulationRouter = Router();

postulationRouter.get("/all", postulationControllers.getPostulations.getAll);
postulationRouter.get(
  "/view/:id",
  postulationControllers.getPostulations.getByID
);
postulationRouter.post("/create", postulationControllers.savePostulation);
postulationRouter.delete(
  "/delete/:id",
  postulationControllers.deletePostulation
);
postulationRouter.delete(
  "/update/:id",
  postulationControllers.updatePostulation
);

export { postulationRouter };
