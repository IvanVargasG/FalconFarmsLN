import { async } from "jshint/src/prod-params";
import { connect } from "mongoose";
import {MONGODB_URI} from "./config";


(async () => {
    
    try {
        const db = await connect(MONGODB_URI);
        console.log("BD connect to", db.connect.name);
    } catch (error) {
        console.error(error);
    }

})();