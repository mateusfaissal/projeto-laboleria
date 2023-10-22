import { db } from "../database/db.connection.js"

export async function getCakes(cakeId) {
    return db.query(`SELECT * FROM cakes WHERE id = $1;`, [cakeId]);
}

export async function getClientId(clientId) {
    return db.query(`SELECT * FROM clients WHERE id = $1;`, [clientId]);
}

export async function newOrder(clientId, cakeId, quantity, totalPrice) {
    return db.query(`INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice") VALUES ($1, $2, $3, $4);`, [
        clientId,
        cakeId,
        quantity,
        totalPrice,
      ]);
}

