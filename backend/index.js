import express from 'express';
import postgresql from './postgresql.js';

postgresql(async (connection) => {
  await connection.query('CREATE TABLE IF NOT EXISTS items (id bigserial primary key, title text, author text);');
  await connection.query('CREATE UNIQUE INDEX IF NOT EXISTS title ON items (title);');

  const items = [
    { title: 'Mastering the Lightning Network', author: 'Andreas Antonopoulos' },
    { title: 'Load Balancing with HAProxy', author: 'Nick Ramirez' },
    { title: 'Silent Weapons for Quiet Wars', author: 'Unknown' },
  ];

  for (let i = 0; i < items.length; i += 1) {
    const book = items[i];
    await connection.query(`INSERT INTO items (title, author) VALUES ('${book.title}', '${book.author}') ON CONFLICT DO NOTHING;`);
  }

  console.log('PostgreSQL database seeded!');
});

const app = express();

app.get('/items', async (req, res) => {
  const rows = await process.postgresql.query('SELECT * FROM items');
  res.status(200).send(JSON.stringify(rows));
});

app.listen(3000, () => {
  console.log('App running at http://localhost:3000');
});