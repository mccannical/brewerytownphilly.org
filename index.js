// Declare packages
const express = require('express');
const PORT = process.env.PORT || 5000


// setup express
var app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('pages/home'))

app.listen(PORT,() => console.log(`Listening on ${ PORT }`))
