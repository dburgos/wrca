const ioRedis = require('ioredis');
let client;

function connect() {
    const { REDIS_PORT, REDIS_HOST, REDIS_PASSWORD } = process.env;
    const connection = {
        port: REDIS_PORT,
        host: REDIS_HOST
    };
    if (REDIS_PASSWORD) {
        connection.password = REDIS_PASSWORD;
    }
    try {
        client = new ioRedis(connection);
    } catch (e) {
        console.error('Error connecting to Redis 🚨')
        console.error(e)
    }
}

module.exports = {
    connect,
    client
};