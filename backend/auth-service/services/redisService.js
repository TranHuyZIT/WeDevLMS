const redis = require("redis");
const { createClient } = redis;
const client = async () => {
  const client = createClient();
  await client.connect();
  return client;
};
module.exports = {
  client,
};
