const express = require('express')

const app = express()

const port = 3000


// set el  view engine de ejs
app.set('view engine', 'ejs');

// use res.render to cargar un ejs view file
app.use(require('./Controller/rutasController'));



app.listen(port, () => console.log(`Example app listening on port port!`))