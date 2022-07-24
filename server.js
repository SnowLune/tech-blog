const express = require("express");
const xhb = require("express-handlebars");

const Sequelize = require("./config/connection.js");

app = express();
PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({
   extended: false
}));

Sequelize.sync()
   .then(()=> {
      app.listen(PORT, ()=> {
         console.log(`Now listening on port ${PORT}`)
      });
   });
