const express = require("express");
const app = express();
const port = 3003;

const server = app.listen(port, (req, res) => {
    console.log("server listening on port 🟢 "+ port);
})