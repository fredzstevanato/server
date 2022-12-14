import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const PORT = 3333;
    const app = express();

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(() => console.log('Error connecting to mongo'));


