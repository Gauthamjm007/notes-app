const express = require("express");
const cors = require("cors");
const setupDB = require("./config/database");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const router = require("./config/router");
var corsOptions = {
  exposedHeaders: ["content-Type", "xauth"]
};

const app = express();
const PORT = process.env.PORT || 3037;

app.use(cors(corsOptions));
app.use(express.json());
app.use("/", router);

//db configuration
setupDB();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.listen(PORT, () => {
  console.log(`listening at the port ${PORT} .........`);
});
