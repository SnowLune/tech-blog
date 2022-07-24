const sequelize = require("sequelize");
require("dotenv").config();

// connect to db
var connection;
if ( process.env.JAWSDB_URL ) {
   connection = new sequelize( process.env.JAWSDB_URL );
}
else {
   connection = new sequelize( 
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

const sqlize = connection;

module.exports = sqlize;
