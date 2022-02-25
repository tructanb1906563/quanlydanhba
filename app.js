const express = require("express");
const cors = require("cors");
const setupContactRouters = require("./app/routes/contact.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });
});

setupContactRouters(app);

module.exports = app;