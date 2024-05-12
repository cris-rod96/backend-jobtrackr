import { Postulations } from "../../models/Postulation";
import {
  badRequestResponse,
  internalServerError,
  okResponse,
} from "../../responses";

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
    const postulation = await Postulations.findById(id);
    return postulation
      ? okResponse(res, postulation)
      : badRequestResponse(res, "Postulación no encontrada");
  } catch (error) {
    return internalServerError(res, error.message);
  }
};

export default { getAll, getByID };
