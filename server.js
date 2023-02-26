const express = require("express");
const cors = require("cors");
const db = require("./app/models");

const app = express();

const corsOpt = {
  origin: "*",
};

// regis cors middleware

app.use(cors(corsOpt));
app.use(express.json());

// connection to db
const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

db.mongoose
  .connect(db.url, mongooseConfig)
  .then(() => console.log("Database Connected"))
  .catch((err) => {
    console.log(`Error ${err.message}`);
    process.exit();
  });

// routes awal
app.get("/api", (req, res, next) => {
  res.json({
    message: "Hello",
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server start on port ${PORT}`));
