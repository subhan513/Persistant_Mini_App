require('dotenv').config();
const express = require('express');
const cors = require('cors');
const ConnectToDB = require('./config/db');
const notesRoute = require('./routes/notes.route');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

app.use(express.json())
app.use('/api/v1', notesRoute);
app.listen(PORT,() => {
  console.log(`Server is running on port ${PORT}`)
  ConnectToDB();
});
