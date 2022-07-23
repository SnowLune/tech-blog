const express = require("express");

app = express();
PORT = process.env.PORT || 3001;

app.use();

Sequelize.sync()
   .then(()=> {
      app.listen(PORT, ()=> {
         console.log(`Now listening on port ${PORT}`)
      });
   }
