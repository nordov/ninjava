if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI: process.env.MONGO_KEY,
    secretOrKey: process.env.SECRET_KEY
  }
} else {
  module.exports = require('./keys_dev');
}