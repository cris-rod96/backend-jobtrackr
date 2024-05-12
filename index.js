import server from "./src/server.js";
import { PORT } from "./src/config/envs.js";

const port = PORT ?? 3001;

server.listen(port, () => {
  console.log(`Server listening in: http://localhost:${port}`);
});
