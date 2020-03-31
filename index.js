const express = require("express");
const cors = require("cors");
const setupDB = require("./config/database");
const router = require("./config/router");

const app = express();
const port = 3037;

app.use(cors());
app.use(express.json());
app.use("/", router);

//db configuration
setupDB();

app.listen(port, () => {
  console.log(`listening at the port ${port} .........`);
});
