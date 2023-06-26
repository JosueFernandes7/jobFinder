const express = require('express')
const app = express()
const db = require('./db/connection')


const PORT = 3000

app.listen(PORT, () => {
  console.log("O Express está rodando na porta " + PORT);
})
// db connection
db.authenticate()
.then(() => {
  console.log("Conectou no banco");
}).catch(err => {
  console.log(`Ocorreu um erro ${err}`);
})
// Routes
app.get('/',(req,res) => {
  res.send("Servidor Iniciado com Sucesso 1")
})