const express = require('express');
const mysql = require('mysql2');
const userRoutes = require('./Routes/UserRoutes.js');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//módulo de rotas
app.use(userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
