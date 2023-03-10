const express = require("express");

//initialises application
const homeRoutes = require("./routes/homeroutes");
const apiRoutes = require("./routes/apiRoutes");

const app = express();

//connects to the spefic port we will be using 
const PORT = process.env.PORT || 3000;

// Built in express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Custome middleware including routes
app.use("/api", apiRoutes);
app.use("/", homeRoutes);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));