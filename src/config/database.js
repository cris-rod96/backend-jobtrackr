import { MONGO_LOCAL, MONGO_URI } from "./envs.js";
const MONGO_DB_URI = process.env.NODE_ENV ? MONGO_URI : MONGO_LOCAL;
export { MONGO_DB_URI };
