import app from "./app";
import './database';
import { PORT } from "./config";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.listen(PORT);

console.log("Server on port", PORT);
