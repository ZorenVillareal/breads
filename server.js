const express = require('express');

const app = express();

require('dotenv').config();

const PORT = process.env.PORT;

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads')
})

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// MIDDLEWARE
app.use(express.static('public'))

// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})

app.listen(PORT, function(){
    console.log(`http://localhost:${PORT}`)
})