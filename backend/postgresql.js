import postgresql from 'pg';
import os from 'os';

const { Pool } = postgresql;

export default (callback = null) => {
  // NOTE: PostgreSQL creates a superuser by default on localhost using the OS username.
  // const pool = new Pool({
  //   user:'postgres',
  //   database: 'testdb',
  //   password: '123456',
  //   host: '127.0.0.1',
  //   port: 3333,
  // });
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

  const connection = {
    pool,
    query: (...args) => {
      return pool.connect().then((client) => {
        return client.query(...args).then((res) => {
          client.release();
          return res.rows;
        });
      });
    },
  };

  process.postgresql = connection;

  if (callback) {
    callback(connection);
  }

  return connection;
};
