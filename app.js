(async () => {
    
const express = require('express')
const path = require('path')
const app = express();
const port = 3000
const routes = require('./routes/taskRoutes')
const database = require('./db');
const Task = require('./models/Task')
const List = require('./models/List')

await database.sync();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use('/', routes);

app.listen(port, () => { console.log(`Rodando na porta ${port}`)});

})();