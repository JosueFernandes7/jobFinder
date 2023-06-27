const express     = require('express')
const app         = express()
const db          = require('./db/connection')
const bodyParser  = require('body-parser')

const PORT = 3000

app.listen(PORT, () => {
  console.log("O Express está rodando na porta " + PORT);
})
// body parser
app.use(bodyParser.urlencoded({extended: false}))
// db connection
db.authenticate()
.then(() => {
  console.log("Conectou no banco");
}).catch(err => {
  console.log(`Ocorreu um erro ${err}`);
})
// Routes
app.get('/',(req,res) => {
  res.send("Está funcionando")
})

// cria a rota jobs
app.use('/jobs', require('./routes/jobs'))