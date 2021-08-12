const express = require("express");
const app = express();

const path = require("path");
const notes = require(path.resolve("src/data/notes-data"));

app.use(express.json());

function idValidityCheck(req, res, next){
  const noteId = Number(req.params.noteId);
  const foundNote = notes.find((note) => note.id === noteId);
  if (foundNote) {
    next();
  } else {
    next({status: 404, message: `Note id not found: ${req.params.noteId}`});
  }
}

function contentValidityCheck(req, res, next){
  const { data } = req.body;
  
  if (!data) next({status: 400, message: "Data is missing."});
  const { text } = data;
  if (!text){
    next({status: 400, message: "A 'text' property is required."});
  }
 
}

app.get("/notes/:noteId", idValidityCheck, (req, res) => {
  const noteId = Number(req.params.noteId);
  const foundNote = notes.find((note) => note.id === noteId);
  res.json({ data: foundNote });
});

app.get("/notes", (req, res) => {
  return res.json({ data: notes });
});

let lastNoteId = notes.reduce((maxId, note) => Math.max(maxId, note.id), 0);

app.post("/notes", contentValidityCheck, (req, res) => {
  const { data: { text } = {} } = req.body;
  const newNote = {
    id: ++lastNoteId, // Increment last id then assign as the current ID
    text,
  };
  notes.push(newNote);
  res.json({ data: newNote });

});

// Not found handler
app.use((req, res, next) => {
//  next({status: 404, message: `Not found: ${req.originalUrl}`});
  res.status(404).json({error: `Not found: ${req.originalUrl}`});
});

// Error handler
app.use((error, req, res, next) => {
  const {status=500, message=`${req.path} was not found`} = error;
  return res.status(status).json({error: message});
});

module.exports = app;
