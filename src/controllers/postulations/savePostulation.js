import { Postulations } from "../../models/Postulation.js";
import { MEGA_ULTRA_SECRET_PASSWORD } from "../../config/envs.js";
import {
  badRequestResponse,
  deniedResponse,
  internalServerError,
  okResponse,
} from "../../responses/index.js";
const savePostulation = async (req, res) => {
  try {
    const { secret_password, ...data } = req.body;
    if (!secret_password || secret_password !== MEGA_ULTRA_SECRET_PASSWORD)
      return deniedResponse(
        res,
        "Esta acción requiere de permisos adicionales"
      );

    const postulation = await Postulations.create(data);
    return postulation
      ? okResponse(res, postulation)
      : badRequestResponse(res, "No se pudo guardar la postulación");
  } catch (error) {
    return internalServerError(res, error.message);
  }
};
export default savePostulation;
