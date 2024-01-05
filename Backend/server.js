// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://ravindra4mahajan:Reyansh2022@cluster0.9uhopns.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define MongoDB schema and models using mongoose

// Define routes to handle database operations (GET, POST, PUT, DELETE)

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
