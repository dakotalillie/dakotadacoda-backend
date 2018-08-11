'use strict';

const express = require('express');
const config = require('config');

const setupApp = require('./setup');

const PORT = config.get('port');

async function runApp() {
  try {
    const app = express();
    const transporter = await setupApp(app);
    const server = app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
    return { transporter, server };
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

module.exports = runApp();