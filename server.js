const express = require('express');
const app = express();
const port = 3000;
require("dotenv").config();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//importar as rotas
const EventsRoutes = require('./Routes/EventsRoutes');
const UsersRoutes = require('./Routes/UsersRoutes');
const AuthRoutes = require('./Routes/AuthRoutes');

//usando rotas
app.use('/events', EventsRoutes);
app.use('/users', UsersRoutes);
app.use('/login', AuthRoutes);

app.listen(port, () => console.log(`server rodando em http://localhost:${port}`));




