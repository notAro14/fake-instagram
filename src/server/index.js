import path from 'path';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import postsRoutes from './routes/posts';

const isDev = process.env.NODE_ENV === 'development';
const PORT = process.env.PORT || 4001;
const app = express();
const CONNECTION_URL =
  'mongodb+srv://instagram-like:instagram-like@cluster0.y6lml.mongodb.net/instagram?retryWrites=true&w=majority';

app.use(express.urlencoded({ extended: true, limit: '30mb' }));
app.use(express.json({ limit: '30mb' }));
app.use(cors());

app.use('/api/posts', postsRoutes);

if (!isDev) {
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
      console.log(
        `✨ ${
          isDev ? 'API' : 'Project'
        } is running at http://localhost:${PORT}/`
      )
    );
  })
  // eslint-disable-next-line
  .catch(error => console.error(error.message));

mongoose.set('useFindAndModify', false);
