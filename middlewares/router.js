const userRoutes = require("../routes/user");

module.exports = (app) => {
  app.use("/api/v1", userRoutes);
}