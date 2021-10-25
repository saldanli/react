import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

const PORT = 3000;

async function start(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    );
    if (req.method == 'OPTIONS') {
      res.header(
        'Access-Control-Allow-Methods',
        'PUT, POST, PATCH, DELETE, GET',
      );
      return res.status(200).json({});
    }

    next();
  });

  console.log(`server listening on port:${PORT}`);
  await app.listen(PORT);
}
start();
