const app = require ('./app');
const config = require ('./config');

app.listen(config.port, () => {
    console.log(`Server is up and runnig at port ${config.port}`)
});