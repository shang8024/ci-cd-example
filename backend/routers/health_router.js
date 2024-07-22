const Router = require('express').Router;
const healthRouter = Router();
const productDB = require("../db/productDB.js")

var { createClient } = require('redis');
const maxRetries = 100; // Number of times to try for reconnecting
const retryDelay = 1000; // Milliseconds
const client = createClient({
  url: 'redis://redis:6379',
  socket: {
    reconnectStrategy: (retries) => {
      if (retries > maxRetries) {
        return undefined; // Connection terminates
      }
      console.log(`Retrying redis connection - ${retries}`);
      return retryDelay;
    },
    connectionTimeout: 300000, // 5 minutes
  },
});

let cacheConnected = false;
client.on('error', (err) =>{
  console.log("Redis error, can't connect to ", err.message );
  cacheConnected = false;
});

client.on('connect', () => {
  console.log("Connected to Redis");
  cacheConnected = true;
}
);


client.connect();

// POST endpoint to create a product
healthRouter.get("/", (req, res) => {
    res.json({server: true, database: productDB.status, cache: cacheConnected});
});

module.exports = healthRouter;