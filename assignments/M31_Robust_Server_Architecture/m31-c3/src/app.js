const express = require("express");
const app = express();

const notes = require("./data/notes-data");
const inputValidityCheck = require("./middleware/inputValidityCheck");

app.use(express.json({}));

app.get("/notes/:noteId", (req, res) => {
  const noteId = Number(req.params.noteId);
  const foundNote = notes.find((note) => note.id === noteId);
  if (foundNote){
    res.json({ data: foundNote });
  }else{
    res.status(400).send(`Note id not found: ${noteId}`);
  }
});

app.get("/notes", (req, res, next) => {
  res.json({ data: notes });
});

// Add ability to create a new note
app.post("/notes", inputValidityCheck, (req, res, next) =>{
  const { data: { text } = {} } = req.body;
  
  const id = notes.reduce((maxId, note)=>Math.max(maxId, note.id), 0) + 1;
  const newNote = {id, text};
  notes.push(newNote);
  res.status(201).json({data: newNote});
})

// not found handler
app.use((req, res, next)=>{
  res.status(400).send(`Not found: ${req.originalUrl}`);
})

// Add error handler
app.use((err, req, res, next)=>{
  res.status(400).send(err);
})

module.exports = app;
