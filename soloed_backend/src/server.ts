import 'reflect-metadata';

import express from 'express';
import cors from 'cors';
import routes from './routes';

import './database';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World!' });
});

app.listen(3334, () => {
  console.log('🎨️ Server started on port 3334!');
});
