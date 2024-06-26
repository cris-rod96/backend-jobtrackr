import { Postulations } from "../../models/Postulation.js";
import {
  badRequestResponse,
  deniedResponse,
  internalServerError,
  okResponse,
} from "../../responses/index.js";
import { MEGA_ULTRA_SECRET_PASSWORD } from "../../config/envs.js";

const deletePostulation = async (req, res) => {
  try {
    const { id } = req.params;
    const { secret_password } = req.body;
    if (!secret_password || secret_password !== MEGA_ULTRA_SECRET_PASSWORD)
      return deniedResponse(
        res,
        "Acción no permitida. La contraseña es obligatoria."
      );
    const postulationDeleted = await Postulations.findByIdAndUpdate(id, {
      isDeleted: true,
    });
    return postulationDeleted
      ? okResponse(res, { message: "Postulación eliminada" })
      : badRequestResponse(res, "Error al eliminar la postulacion");
  } catch (error) {
    return internalServerError(res, error.message);
  }
};

export default deletePostulation;
