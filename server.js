// External Modules
const express = require("express");
const app = express();

// Starting Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
