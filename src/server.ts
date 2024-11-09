import app from './app';
import { Config } from './config';
import logger from './config/logger';

const startServer = () => {
  try {
    app.listen(Config.PORT, () => {
      logger.info(`server started on port ${Config.PORT}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();
