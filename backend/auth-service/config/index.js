module.exports = {
  development: {
    dialect: process.env.dialect || "mysql",
    username: process.env.db_username || "root",
    password: process.env.password || "123456",
    database: process.env.database || "test",
    host: process.env.host || "localhost",
    port: process.env.port || 3306,
  },
  security: {
    accessKey: process.env.ACCESS_TOKEN_KEY,
    refreshKey: process.env.REFRESH_TOKEN_KEY,
  },
};
