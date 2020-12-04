const mongoose = require("mongoose");
require("dotenv").config();
const env = process.env.NODE_ENV;

let db_url;
db_url = env === "production" ? process.env.PROD_DB : process.env.DEV_DB;
module.exports = () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(db_url, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
      console.log(`Database connection established`);
    })
    .catch(err => {
      console.log(`Failed to connect to database. ${err.message}`);
    });
}