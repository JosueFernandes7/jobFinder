const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const db = require('./db/connection')
const bodyParser = require('body-parser')
const path = require('path')
const PORT = 3000

app.listen(PORT, () => {
  console.log("O Express está rodando na porta " + PORT);
})
// body parser
app.use(bodyParser.urlencoded({ extended: false }))

// handle bars
app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine','handlebars')

// db connection
db.authenticate()
  .then(() => {
    console.log("Conectou no banco");
  }).catch(err => {
    console.log(`Ocorreu um erro ${err}`);
  })
// Routes
app.get('/', (req, res) => {
  res.send("Está funcionando")
})

// cria a rota jobs
app.use('/jobs', require('./routes/jobs'))