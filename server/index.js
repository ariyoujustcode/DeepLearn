const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const topicRoutes = require('./routes/topicRoutes');
const noteRoutes = require('./routes/noteRoutes'); // Import the notes route

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());

// Use routes
app.use('/api/topics', topicRoutes);
app.use('/api/notes', noteRoutes); // Use the notes route

// Root route
app.get('/', (req, res) => {
    res.send('Hello, DeepLearn Server is running!');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
