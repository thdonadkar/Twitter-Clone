const express = require("express");
const app = express();
const port = 3003;

const server = app.listen(port, (req, res) => {
    console.log("server listening on port 🟢 "+ port);
})

app.set("view engine", "pug");
app.set("views", "views");

app.get("/", (req, res) => {

    var payload = {
        pageTitle: "Home"
    }

    res.status(200).render("home",payload);
})