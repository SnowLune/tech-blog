const express = require("express");
const xhb = require("express-handlebars");
const hbs = xhb.create()

const Sequelize = require("./config/connection.js");

app = express();
PORT = process.env.PORT || 3001;

app.engine("handlebars", hbs.engine());
app.use(express.json());
app.use(express.urlencoded({
   extended: false
}));
app.use(require("./controllers"));

Sequelize.sync()
   .then(()=> {
      app.listen(PORT, ()=> {
         console.log(`Now listening on port ${PORT}`)
      });
   });
