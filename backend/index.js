const express = require('express');
var bodyParser = require('body-parser');
var productRouter = require("./routers/product_router.js");
var healthRouter = require("./routers/health_router.js");
var cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 5000;

app.use("/api/products", productRouter);

app.use("/api/health",healthRouter);

/* Start our server on port */
app.listen(port, () => {
  console.log(`Application started at http://localhost:${port}`);
});
