const path = require("path");

const express = require("express");
const app = express();

// app.all(`*`, (req, res) => {
//   res.sendFile(path.join(__dirname, `/.www/dist/index.html`));
// });

app.use(express.static(path.join(__dirname, `/.www/dist/`)));

app.listen(3000, () => {
  console.log(`Express server started`);
});
