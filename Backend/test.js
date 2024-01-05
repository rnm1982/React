require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');

// MongoDB Atlas connection URI
const mongoURI = process.env.MONGODB_URI; // Use your MongoDB Atlas connection URI
// const mongoURI = 'mongodb+srv://ravindra4mahajan:Reyansh2022@cluster0.9uhopns.mongodb.net/Person'; // Use your MongoDB Atlas connection URI

// Establishing connection to MongoDB using Mongoose
mongoose.connect(mongoURI, {
  useNewUrlParser: true, // These are deprecated but can be kept for compatibility
  useUnifiedTopology: true, // These are deprecated but can be kept for compatibility
})
  .then(() => {
    console.log('Connected to MongoDB');

    // Creating a Mongoose schema for the 'person' collection
    const personSchema = new mongoose.Schema({
      name: String,
      age: Number,
      email: String,
    });

    // Creating a Mongoose model based on the schema for 'person' collection
    const Person = mongoose.model('Person', personSchema);

    // Sample data to insert into the 'person' collection
    const persons = [
      { name: 'John Doe', age: 30, email: 'john@example.com' },
      { name: 'Jane Smith', age: 25, email: 'jane@example.com' },
      // Add more persons as needed
    ];

    // Inserting data into the 'person' collection using insertMany
    return Person.insertMany(persons);
  })
  .then((insertedPersons) => {
    console.log(`${insertedPersons.length} documents inserted into the 'person' collection.`);
  })
  .catch((err) => {
    console.error('Error:', err);
  })
  .finally(() => {
    // Close the Mongoose connection when done
    mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  });
