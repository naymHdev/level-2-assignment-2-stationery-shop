import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

const { port, databaseURI } = config;

async function connectServer() {
  try {
    await mongoose.connect(databaseURI as string);
    app.listen(port, () => {
      console.log(`Stationery server running on this =>-- ${port} ⚡︎`);
    });
  } catch (error) {
    `Error from server: ${error}`;
  }
}

connectServer();
