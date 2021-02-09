const path = require('path');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 4001;
const app = express();

app.use(express.urlencoded({ extended: true, limit: '30mb' }));
app.use(express.json({ limit: '30mb' }));
app.use(cors());

const CONNECTION_URL =
  'mongodb+srv://instagram-like:instagram-like@cluster0.y6lml.mongodb.net/instagram?retryWrites=true&w=majority';

app.get('/api/hello', (_, res) => {
  res.json({ message: 'Hello World' });
});

if (process.env.NODE_ENV === 'production') {
  app.use('/assets', express.static(path.join(__dirname, '../../dist')));

  app.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
  });
}

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () =>
      // eslint-disable-next-line
      console.log(`✨ Project is running at http://localhost:${PORT}/`)
    );
  })
  // eslint-disable-next-line
  .catch(error => console.error(error.message));

mongoose.set('useFindAndModify', false);
