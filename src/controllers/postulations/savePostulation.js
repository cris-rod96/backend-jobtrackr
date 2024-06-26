import { Postulations } from "../../models/Postulation.js";
import { DateTime } from "luxon";
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
        "Acción no permitida. La contraseña es obligatoria."
      );

    const postulation = await Postulations.create({
      ...data,
      postulationDate: DateTime.now().toLocaleString(DateTime.DATE_MED),
    });
    return postulation
      ? okResponse(res, postulation)
      : badRequestResponse(res, "No se pudo guardar la postulación");
  } catch (error) {
    return internalServerError(res, error.message);
  }
};
export default savePostulation;
