const express = require("express");
const morgan = require('morgan');
const path = require('path');


/* Set and configure app */
const app = express();
const port = process.env.PORT || 5000;
// Morgan will keep tabs in the console of server requests
app.use(morgan('dev'));
// Seting up public folder 
app.use(express.static(__dirname + '/public'));;

app.get("/", (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

/* Start engines */
app.listen(port, () => console.log(`Server is now listening on port ${port}`));





