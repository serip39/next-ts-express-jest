const next = require('next')
const express = require('express')
const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const mongoose = require('mongoose');
const connectOption = {
  useUnifiedTopology: true,
  useNewUrlParser: true
}
mongoose.connect('mongodb+srv://greenlime21:clearsky2M@cluster0.xt4si.mongodb.net/greenlime21?retryWrites=true&w=majority', connectOption);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', () => console.log('DB connection successful'));
const userSchema = require('../model/userSchema');
const user = mongoose.model('user', userSchema, 'user');

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`>>>>> Ready on http://localhost:4001`)
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
