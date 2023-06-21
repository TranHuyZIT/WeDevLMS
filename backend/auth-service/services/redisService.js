const redis = require("redis");
const client = redis.createClient();
(async () => {
  client.connect();
})();
module.exports = client;
