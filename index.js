import server from "./src/server.js";
import { PORT } from "./src/config/envs.js";
import "./src/database/database.js";
import { connectDB } from "./src/database/database.js";

const port = PORT ?? 3001;
connectDB()
  .then((res) => {
    server.listen(port, () => {
      console.log(`Server listening in: http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("Error en la conexion: ", err);
  });
