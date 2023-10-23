import { db } from "../database/db.connection.js"

export async function newClient(name, address, phone) {
  return db.query(`INSERT INTO clients (name, address, phone) VALUES ($1, $2, $3);`, [name, address, phone]);
}

export async function getClientById(clientId) {
  return db.query(`SELECT * FROM clients WHERE id=$1`, [clientId])
}

export async function getOrdersByClientId(clientId) {
  return db.query(
    `
  SELECT
    c.id as "clientId",
    o.id as "orderId",
    TO_CHAR(o."createdAt", 'YYYY-MM-DD HH24:MI:SS') AS "createdAt",
    o.quantity,
    o."totalPrice",
    ca.name as "cakeName"
  FROM
    clients c
    INNER JOIN orders o ON c.id = o."clientId"
    INNER JOIN cakes ca ON o."cakeId" = ca.id
  WHERE
    c.id = $1`,
    [clientId]
  );
}