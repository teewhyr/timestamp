const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/timestamp', (req, res) => {
  const timestamp = new Date().toISOString();
  res.send({ timestamp });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
