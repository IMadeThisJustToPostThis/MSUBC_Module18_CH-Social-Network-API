const express = require('express');
const connection = require('./config/connection.js');
const routes = require('./controllers');

const PORT = process.env.PORT || 3001;
const app = express();

const cwd = process.cwd();
const activity = cwd.includes('Module18')
  ? cwd.split('/MSUBC_Module18_CH Social Network API/')
  : cwd;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(routes);

connection.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server for ${activity} listening at: http://localhost:${PORT}!`);
        console.log(cwd.split('MSUBC_Module18_CH Social Network API')[1]);
    });
});