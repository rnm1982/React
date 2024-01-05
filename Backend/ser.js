const mongoose = require('mongoose');

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://ravindra4mahajan:Reyansh2022@cluster0.9uhopns.mongodb.net/Person', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the schema for your collection
const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a Mongoose model based on the schema
const Person = mongoose.model('Person', personSchema);

// Example usage:
const newPerson = new Person({
  name: 'John Doe',
  age: 30,
  email: 'john@example.com'
});

// Save the new person to the database
newPerson.save((err, savedPerson) => {
  if (err) {
    console.error('Error saving person:', err);
  } else {
    console.log('Person saved successfully:', savedPerson);
  }
});

/* let output;
(async () => {
   output = await newPerson.save();
})

console.log(output); */
