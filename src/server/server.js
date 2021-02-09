const path = require('path');
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 4001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/api/hello', (_, res) => {
  res.json({ message: 'Hello World' });
});

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
