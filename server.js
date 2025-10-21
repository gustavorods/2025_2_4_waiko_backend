require('dotenv').config();
const express = require("express");
const cors = require("cors");
const firebaseApp = require("./config/firebaseConfig");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Firebase Online Mohantico!')
})

app.listen(PORT, () => { 
  console.log(`Servidor rodando na porta ${PORT}`);
});
