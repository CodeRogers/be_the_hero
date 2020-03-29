const dotenv = require('dotenv');
dotenv.config({ path: 'src/config/.env' });

module.exports = {
    port: process.env.PORT || 3333,
    dbhost: process.env.POSTGRES_DBHOST,
    dbname: process.env.POSTGRES_DBNAME,
    dbport: process.env.POSTGERS_PORT,
    dbuser: process.env.POSTGERS_USER,
    dbpwd: process.env.POSTGERS_PASSWORD,
};