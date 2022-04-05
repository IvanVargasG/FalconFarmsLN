process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'
import app from "./app";
import './database';
import { PORT } from "./config";

app.listen(PORT);

console.log("Server on port", PORT);
