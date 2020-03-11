const User = require("./models/User");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require('passport');

const app = express();
const db = require("./config/keys").mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB succesfully"))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is now listening on port ${port}`));

/* Body Parser middleware setup */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

/* Passport middleware setup */
app.use(passport.initialize());
require('./config/passport')(passport);


/* Routes import and declaration */
const users = require("./routes/api/users");

app.use("/api/users/", users);