const Sequelize = require("sequelize");
require("dotenv").config();

// connect to db
if ( process.env.JAWSDB_URL ) {
   const connection = new Sequelize( process.env.JAWSDB_URL );
}
else {
   const connection = new Sequelize( 
      process.env.DB_NAME, 
      process.env.DB_USER, 
      process.env.DB_PASS, 
      {
         host: "localhost",
         dialect: "mysql",
         port: 3306
      }
   );
}

module.exports = connection;
