const express = require("express");
const app = express();

app.use((req, res) => {
  const target = `https://eigonotobira.com${req.originalUrl}`;
  res.redirect(301, target);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Redirect server running on port ${PORT}`);
});
