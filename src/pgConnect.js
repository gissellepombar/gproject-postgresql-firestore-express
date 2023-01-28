import { Pool } from "pg";
import { credentials } from "../secrets.js";

export function pgConnect() {
    return new Pool(credentials)
}
