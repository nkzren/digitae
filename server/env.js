const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    API_PORT: process.env.API_PORT,
    API_KEY: process.env.API_KEY,
    WEBSOCKET_PORT: process.env.WEBSOCKET_PORT,
    CONNECT_TIMEOUT: process.env.CONNECT_TIMEOUT || 15
}