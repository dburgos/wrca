const { client: redis } = require('../../sources/redis');

redis.on("testEvent", (channel, message) => {
    // Call any core/... function    
});