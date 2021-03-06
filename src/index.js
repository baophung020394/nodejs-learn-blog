const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const path = require('path');
const port = 3000;

// Set public assets path
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.urlencoded());
app.use(express.json())
// HTTP logger
// app.use(morgan('combined'));

// Template engine
// Configurations
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.get('/search', (req, res) => {
  console.log(req.query.q)
  res.render('search');
});

app.post('/search', (req, res) => {
  console.log(req.body)
  res.send('');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
