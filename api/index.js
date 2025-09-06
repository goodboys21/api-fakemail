const express = require('express');
const NameGenerator = require('./NameGenerator'); // udah sama folder /api

const app = express();

app.get('/create', (req, res) => {
  const gen = new NameGenerator();
  res.json({
    success: true,
    email: gen.gen_mail(),
    password: gen.gen_pass(),
    ip: gen.gen_ip()
  });
});

module.exports = app;
