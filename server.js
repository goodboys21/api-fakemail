const express = require('express');
const NameGenerator = require('./NameGenerator');

const app = express();
const port = process.env.PORT || 3000;

app.get('/create', (req, res) => {
  const gen = new NameGenerator();
  res.json({
    success: true,
    email: gen.gen_mail(),
    password: gen.gen_pass(),
    ip: gen.gen_ip()
  });
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
