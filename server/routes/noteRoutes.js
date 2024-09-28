const express = require('express');
const router = express.Router();
const Note = require('../models/note'); // Adjust if you create a model

// Example route to get all notes
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find(); // Fetch all notes from the database
    res.json(notes);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Create a new note
router.post('/', async (req, res) => {
  const newNote = new Note(req.body); // Create a new note from the request body
  try {
    const savedNote = await newNote.save(); // Save the note to the database
    res.status(201).json(savedNote);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
