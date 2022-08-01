import express from "express";
import postgresql from "./postgresql.js";
import fs from "fs";
import cors from 'cors'

let items;
fs.readFile("./items.json", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  items = JSON.parse(data);
});

postgresql(async (connection) => {
  await connection.query('DROP TABLE IF EXISTS items;');
  await connection.query(
    "CREATE TABLE IF NOT EXISTS items (id bigserial primary key, name character varying, qty numeric(10,2) NOT NULL default 0, distance numeric(10,2) NOT NULL default 0, date timestamp without time zone NOT NULL);"
  );
  

  for (let i = 0; i < items.length; i += 1) {
    const item = items[i];
    await connection.query(
      `INSERT INTO items (name, qty, distance, date) VALUES ('${item.name}', '${item.qty}', '${item.distance}', '${item.date}') ON CONFLICT DO NOTHING;`
    );
  }

  console.log("PostgreSQL database seeded!");
});

const app = express();
app.use(cors())

app.get("/items", async (req, res) => {
  const rows = await process.postgresql.query("SELECT * FROM items");
  res.status(200).send(JSON.stringify(rows));
});

app.listen(process.env.PORT, () => {
  
});
