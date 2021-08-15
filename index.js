const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const quizzes = require("./routes/quizzes.router");
const {mongoDBConnection} = require("./db/db.connect");

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoDBConnection();

app.use("/quizzes", quizzes);

app.get('/', (req, res) => {
  res.send('MITRA QUIZ')
});

app.use((req, res) => {
  res.status(400).json({
    success: false,
    messageg: "Route not found on server, please check."
  });
});

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({
    success: false,
    message: "error occurred, see the errorMessage key for more details",
    errorMessage: error.message
  });
});

app.listen(3000, () => {
  console.log('server started');
});