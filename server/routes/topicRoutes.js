const express = require('express');
const router = express.Router();
const Topic = require('../models/topic'); // Adjust the path as necessary

// Example route to get all topics
router.get('/', async (req, res) => {
  try {
    const topics = await Topic.find();
    res.json(topics);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Create a new topic
router.post('/', async (req, res) => {
  const newTopic = new Topic(req.body);
  try {
    const savedTopic = await newTopic.save();
    res.status(201).json(savedTopic);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
