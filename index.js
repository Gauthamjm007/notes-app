const express = require("express");
const cors = require("cors");
const setupDB = require("./config/database");
const router = require("./config/router");
var corsOptions = {
  exposedHeaders: ["content-Type", "xauth"]
};

const app = express();
const port = 3037;

app.use(cors(corsOptions));
app.use(express.json());
app.use("/", router);

//db configuration
setupDB();

app.listen(port, () => {
  console.log(`listening at the port ${port} .........`);
});
