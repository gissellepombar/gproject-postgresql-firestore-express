import { pgConnect } from "./pgConnect";

export function getAllContacts (req, res) {
    const db = pgConnect()
    db.query
}