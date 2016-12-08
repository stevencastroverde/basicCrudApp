// Update with your config settings.
require('dotenv').config();
module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgresql://localhost/basiccrudmovies'

  },


  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }


};
