import { Postulations } from "../../models/Postulation.js";
import {
  badRequestResponse,
  deniedResponse,
  internalServerError,
  okResponse,
} from "../../responses/index.js";
import { MEGA_ULTRA_SECRET_PASSWORD } from "../../config/envs.js";

const updatePostulation = async (req, res) => {
  try {
    const { id } = req.params;
    const { secret_password, ...data } = req.body;
    if (!secret_password || secret_password !== MEGA_ULTRA_SECRET_PASSWORD)
      return deniedResponse(
        res,
        "Acción no permitida. La contraseña es obligatoria."
      );
    const postulationEdited = await Postulations.findByIdAndUpdate(id, data);
    return postulationEdited
      ? okResponse(res, postulationEdited)
      : badRequestResponse(res, "Error al editar la postulacion");
  } catch (error) {
    return internalServerError(res, error.message);
  }
};

export default updatePostulation;
