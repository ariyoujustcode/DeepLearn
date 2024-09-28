const Topic = require('../models/topic');

const getAllTopics = async (req, res) => {
  try {
    const topics = await Topic.find();
    res.json(topics);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createTopic = async (req, res) => {
  const newTopic = new Topic(req.body);
  try {
    const savedTopic = await newTopic.save();
    res.status(201).json(savedTopic);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = {
  getAllTopics,
  createTopic,
};
