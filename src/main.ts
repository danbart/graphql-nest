import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['https://studio.apollographql.com', 'http://localhost:3000'], // Permitir estos orígenes
    credentials: true, // Habilitar cookies/sesiones si es necesario
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
