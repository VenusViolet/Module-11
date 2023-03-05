const path = require("path"); //works to allow us to find html file on any computer
const router = require("express").Router(); 

// "/notes" responds with the notes.html file
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/assets/notes.html"));
});

// All other routes respond with the index.html file
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;