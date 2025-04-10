import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const time = new Date().toLocaleTimeString();
  res.send(`Hello World! It's ${time} now.`);
});

// Health check endpoint
app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
