const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 4000;
const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use('/assets', express.static(path.join(__dirname, '../../dist')));

  app.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
  });
}

app.listen(PORT, () =>
  // eslint-disable-next-line
  console.log(`✨ Project is running at http://localhost:${PORT}/`)
);
