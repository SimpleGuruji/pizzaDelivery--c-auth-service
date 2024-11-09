import app from './app';
import { Config } from './config';

const startServer = () => {
  try {
    app.listen(Config.PORT, () => {
      console.log(`server started on port ${Config.PORT}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();
