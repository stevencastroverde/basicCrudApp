// Update with your config settings.
 const dotenv =require('dotenv')
 dotenv.config();

  development: {
    client: 'postgresql',

    connection: process.env.DEVELOPMENT_DATABASE_URL

  };


  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }


};
