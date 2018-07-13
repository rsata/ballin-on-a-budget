const bodyParser = require('body-parser');
const express = require('express');
const plaid = require('plaid');
const moment = require('moment');
const { Pool, Client } = require('pg');

const secrets = require('./secrets.js');
const queries = require('./queries.js');

const app = express();

// Get rid of this and store it for real...
const fs = require('fs');

// pools will use environment variables
// for connection information
const pool = new Pool({
  user: 'ballin_on_a_budget_admin',
  host: 'localhost',
  database: 'ballin_on_a_budget',
  password: 'qwerty',
  port: 5432,
})

// We store the access_token in memory - in production, store it in a secure
// persistent data store
let ACCESS_TOKEN = null;
let PUBLIC_TOKEN = null;

const plaidClient = new plaid.Client(
  secrets.PLAID_CLIENT_ID,
  secrets.PLAID_SECRET,
  secrets.PLAID_PUBLIC_KEY,
  plaid.environments.development
);

app.set('view engine', 'hjs');
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use('/*', function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});

app.get('/', function(request, response, next) {
  response.render('index');
});

// Accept the public_token sent from Link
app.post('/get_access_token', (request, response) => {
  PUBLIC_TOKEN = request.body.public_token;
  //access-sandbox-bea03486-2b34-42e4-98fb-616be382e4f9 - console.log(PUBLIC_TOKEN)
  plaidClient.exchangePublicToken(PUBLIC_TOKEN, (error, tokenResponse) => {
    if (error != null) {
      var msg = 'Could not exchange public_token!';
      console.log(msg + '\n' + error);
      return response.json({
        error: msg
      });
    }    
    // save this for real in production...
    fs.writeFile('./boa_token', tokenResponse.access_token, (err) => {if (err) throw err; console.log('saved token')});
    ACCESS_TOKEN = fs.readFileSync('./boa_token', 'utf-8');;
    ITEM_ID = tokenResponse.item_id;
    response.json({
      'error': false
    });
  });
});

app.post('/test-webhook', (req, res) => {
  console.log(req.body.new_transactions);
  const { webhook_code, new_transactions } = req.body;
  if (webhook_code === 'INITIAL_UPDATE') {
    plaidClient.getTransactions('access-sandbox-bea03486-2b34-42e4-98fb-616be382e4f9', moment().subtract(30, 'days').format('YYYY-MM-DD'), moment().format('YYYY-MM-DD'), {
      offset: 0,
    }, (err, result) => {
      // Handle err
      const { transactions } = result;
      console.log(transactions);
    });
  }
  if (webhook_code === 'HISTORICAL_UPDATE') {
    plaidClient.getTransactions('access-sandbox-bea03486-2b34-42e4-98fb-616be382e4f9', moment().subtract(30, 'days').format('YYYY-MM-DD'), moment().format('YYYY-MM-DD'), {
      offset: 0,
    }, (err, result) => {
      // Handle err
      const { transactions } = result;
      console.log(transactions);
    });
  }
  if (webhook_code === 'DEFAULT_UPDATE') {
    plaidClient.getTransactions('access-sandbox-bea03486-2b34-42e4-98fb-616be382e4f9', moment().subtract(30, 'days').format('YYYY-MM-DD'), moment().format('YYYY-MM-DD'), {
      count: new_transactions,
      offset: 0,
    }, (err, result) => {
      // Handle err
      const { transactions } = result;
      console.log(transactions);
    });
  }
});

app.get('/transactions', (req, res) => {
  const user_id = 1; // for now...
  queries.getTransactions(pool, user_id)
    .then(r => res.send(r))
    .catch(e => {throw e})
});

// webhook for 
app.post('/update-transactions', (req, res) => {
  plaidClient.getTransactions(ACCESS_TOKEN, moment().subtract(30, 'days').format('YYYY-MM-DD'), moment().format('YYYY-MM-DD'), {
    count: new_transactions,
    offset: 0,
  }, (err, result) => {
    // Handle err
    const { transactions } = result;
    console.log(transactions);
    // save to db - id unique
  });
});

const getTransactionsYTD = () => {
  plaidClient.getTransactions(ACCESS_TOKEN, '2018-01-01', moment().format('YYYY-MM-DD'), {

  }, (err, result) => {
    // queries.insertTransaction(pool, )
  })
}

app.listen(3001);
