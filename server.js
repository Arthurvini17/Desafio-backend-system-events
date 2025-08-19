const express = require('express');
const app = express();
const port = 3000;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//importar as rotas
const EventsRoutes = require('./Routes/EventsRoutes');
const UsersRoutes = require('./Routes/UsersRoutes');

//usando rotas
app.use('/events', EventsRoutes);
app.use('/users', UsersRoutes);

app.listen(port, () => console.log(`server rodando em http://localhost:${port}`));




