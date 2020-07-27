const redis = require('redis');

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

if (process.env.APP_ENVIROMENT !== 'production') {
  redisClient.on('error', (err) => { console.log(`Error ${err}`) });
  redisClient.on('connect', () => { console.log('Redis Connected') });
}

module.exports = redisClient;
