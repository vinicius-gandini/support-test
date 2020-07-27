const mongoose = require('mongoose');

const initialize = () => {
  mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/support-test?authSource=admin`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
  });

  if (process.env.APP_ENVIROMENT !== 'production') {
    const db = mongoose.connection;
    db.once('open', () => { console.log('Database is connected') });
    db.on('reconnected', () => { console.log('Database reconnected') });
    db.on('error', (err) => { console.error(`Database is not connected ${err}`) });
  };
}

module.exports = {
  initialize
}
