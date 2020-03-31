const User = require("./models/User");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require('passport');
const morgan = require('morgan');
const path = require('path');


/* Set and configure app */
const app = express();
const port = process.env.PORT || 5000;
// Morgan will keep tabs in the console of server requests
app.use(morgan('dev'));
// Seting up public folder 
app.use(express.static(__dirname + '/public'));;


/* Body Parser middleware setup */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


/* MongoDB setup & connect */
const db = require("./config/keys").mongoURI;
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB succesfully"))
    .catch(err => console.log(err));


/* Passport middleware setup */
app.use(passport.initialize());
require('./config/passport')(passport);


/* Routes import and declaration */
const users = require("./routes/api/users")
app.use("/api/users/", users);

app.get("/", (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

/* Start engines */
app.listen(port, () => console.log(`Server is now listening on port ${port}`));





