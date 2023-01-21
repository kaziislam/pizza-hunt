
// import mongoose to connect when we start app
const mongoose = require('mongoose');

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

// connect to DB using mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pizza-hunt', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// use this to log mongo queries being executed!
mongoose.set('debug', true)

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
