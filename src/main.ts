import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger Config
  const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('API documentation for Learning My NestJS app')
    .setVersion('1.0')
    .addBearerAuth() // if you want JWT auth
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.PORT ?? 3000);
  Logger.log(
    `🚀 App is running on http://localhost:${process.env.PORT ?? 3000}/swagger 🔥`,
  );
}
bootstrap();
