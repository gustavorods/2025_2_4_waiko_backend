require('dotenv').config();
const express = require("express");
const cors = require("cors");
const firebaseApp = require("./config/firebaseConfig");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);

app.get('/', (req, res) => {
    res.send('Firebase Online Mohantico!') // THANK U BERNASSSSSSSSSSSSSSS
})

// Only start the server if it is not running in test mode
if(process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => { 
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
  });
}

module.exports = app;