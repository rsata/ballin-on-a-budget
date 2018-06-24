// https://www.quora.com/SQL-What-is-the-difference-between-transaction-and-query
// https://node-postgres.com/features/pooling

const queries = {
  dbSetup: () => {
    // https://stackoverflow.com/questions/337503/whats-the-best-practice-for-primary-keys-in-tables
    let query = `
      CREATE EXTENSION IF NOT EXISTS "pgcrypto";

      CREATE TABLE users (
        id serial PRIMARY KEY,
        uuid uuid DEFAULT gen_random_uuid(),
        date_created timestamp DEFAULT now(),
        last_login timestamp DEFAULT now(),
        first_name text,
        last_name text,
        email text,
        password text
      );

      CREATE TABLE plaid_tokens (
        id serial PRIMARY KEY,
        user_id int REFERENCES users(id),
        plaid_token text NOT NULL
      );

      CREATE TABLE transactions (
        id serial PRIMARY KEY,
        user_id int REFERENCES users(id),
        uuid uuid DEFAULT gen_random_uuid(),
        date_created timestamp DEFAULT now(),
        last_update timestamp DEFAULT now(),
        transaction_type int,
        p_account_id text NOT NULL,
        p_amount decimal,
        p_category text[],
        p_category_id text,
        p_date text,
        p_address text,
        p_city text,
        p_state text,
        p_lat text,
        p_lon text,
        p_store_number int,
        p_zip int,
        p_name text,
        p_pending boolean,
        p_transaction_id text UNIQUE,
        p_transaction_type text
      );
    `
    let values = ''

    pool.query(query, values)
      .catch(e => setImmediate(() => { throw e }))
  },

  insertTransaction: (pool, user_id, p_account_id, p_amount, p_category, p_category_id, p_date, p_address, p_city, p_state, p_lat, p_lon, p_store_number, p_zip, p_name, p_pending, p_transaction_id, p_transaction_type ) => {
    return new Promise ((resolve, reject) => {
      let query =`
        INSERT INTO transactions (
          user_id,
          p_account_id,
          p_amount,
          p_category,
          p_category_id,
          p_date,
          p_address,
          p_city,
          p_state,
          p_lat,
          p_lon,
          p_store_number,
          p_zip,
          p_name,
          p_pending,
          p_transaction_id,
          p_transaction_type
        )        
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)
        ON CONFLICT ON CONSTRAINT transactions_p_transaction_id_key DO NOTHING
        ;
      `
      let values = [user_id, p_account_id, p_amount, p_category, p_category_id, p_date, p_address, p_city, p_state, p_lat, p_lon, p_store_number, p_zip, p_name, p_pending, p_transaction_id, p_transaction_type];

      pool.query(query, values, (err, res) => {
        if (!err) {resolve (res.rows)}
        else {reject (err)}
      });
    })
  },

  getTransactions: (pool, user_id) => {
    return new Promise ((resolve, reject) => {
      let query =`
        SELECT * FROM transactions
        WHERE user_id = $1
        ;
      `
      let values = [user_id];
      pool.query(query, values, (err, res) => {
        if (!err) {resolve (res.rows)}
        else {reject (err)}
      });
    });
  }
}

module.exports = queries;


/* 

Need purgatory transactions table that holds all new transactions until they get added in the UI to the official budget for calculations.  
Once a transaction is finalized by the user, it would get inactivated in the transactions table and added to the official budget table. 

*/