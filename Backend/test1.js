const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const mongoURI = process.env.MONGODB_URI;

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Create a Mongoose schema for the 'person' collection
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

// Creating a Mongoose model based on the schema for 'person' collection
const Person = mongoose.model('Person', personSchema);

app.use(express.json());

// Routes for CRUD operations

// GET all persons
app.get('/persons', async (req, res) => {
  try {
    const persons = await Person.find();
    res.json(persons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new person
app.post('/persons', async (req, res) => {
  const { name, age, email } = req.body;
  const person = new Person({ name, age, email });

  try {
    const newPerson = await person.save();
    res.status(201).json(newPerson);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT/update a person by ID
app.put('/persons/:id', async (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;

  try {
    const updatedPerson = await Person.findByIdAndUpdate(id, { name, age, email }, { new: true });
    res.json(updatedPerson);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a person by ID
app.delete('/persons/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Person.findByIdAndDelete(id);
    res.json({ message: 'Person deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
