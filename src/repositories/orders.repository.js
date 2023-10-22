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

export async function getOrdersFromDate(date) {
    let query = `
        SELECT
            o.id as "orderId",
            c.id as "clientId",
            c.name as "clientName",
            c.address as "clientAddress",
            c.phone as "clientPhone",
            ca.id as "cakeId",
            ca.name as "cakeName",
            ca.price as "cakePrice",
            ca.description as "cakeDescription",
            ca.image as "cakeImage",
            TO_CHAR(o."createdAt", 'YYYY-MM-DD HH24:MI:SS') AS "createdAt",
            o.quantity,
            o."totalPrice"
        FROM
            orders o
            INNER JOIN clients c ON o."clientId" = c.id
            INNER JOIN cakes ca ON o."cakeId" = ca.id`;

  const queryParams = [];

  if (date) {
    query += ' WHERE DATE(o."createdAt") = $1';
    queryParams.push(date);
  }

  const result = await db.query(query, queryParams);
  return result.rows;
}

export async function getOrderId(orderId) {
    return db.query(
        `
          SELECT
              o.id as "orderId",
              c.id as "clientId",
              c.name as "clientName",
              c.address as "clientAddress",
              c.phone as "clientPhone",
              ca.id as "cakeId",
              ca.name as "cakeName",
              ca.price::numeric as "cakePrice",
              ca.description as "cakeDescription",
              ca.image as "cakeImage",
              TO_CHAR(o."createdAt", 'YYYY-MM-DD HH24:MI:SS') AS "createdAt",
              o.quantity,
              o."totalPrice"::numeric
          FROM
              orders o
              INNER JOIN clients c ON o."clientId" = c.id
              INNER JOIN cakes ca ON o."cakeId" = ca.id
          WHERE
              o.id = $1`,
        [orderId]
      );
}

