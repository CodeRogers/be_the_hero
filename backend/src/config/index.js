const dotenv = require('dotenv');
dotenv.config({ path: 'src/config/.env' });

module.exports = {
    port: process.env.PORT || 3333,
    dbhost: process.env.POSTGRES_DBHOST,
    dbname: process.env.POSTGRES_DBNAME,
    dbport: process.env.POSTGRES_PORT,
    dbuser: process.env.POSTGRES_USER,
    dbpwd: process.env.POSTGRES_PASSWORD,
};