import { Postulations } from "../../models/Postulation.js";
import {
  badRequestResponse,
  internalServerError,
  okResponse,
} from "../../responses/index.js";

const getAll = async (req, res) => {
  try {
    const postulations = await Postulations.find({ isDeleted: false });
    return res.status(200).json(postulations);
  } catch (error) {
    return internalServerError(res, error.message);
  }
};

const getByID = async (req, res) => {
  try {
    const { id } = req.params;
    const postulation = await Postulations.findOne({
      _id: id,
      isDeleted: false,
    });
    return postulation
      ? okResponse(res, postulation)
      : badRequestResponse(res, "Postulación no encontrada");
  } catch (error) {
    return internalServerError(res, error.message);
  }
};

export default { getAll, getByID };
