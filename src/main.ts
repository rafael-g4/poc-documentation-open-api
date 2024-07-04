import { NestFactory } from '@nestjs/core';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerDocumentOptions,
} from '@nestjs/swagger';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import metadata from './metadata';
import { MainModule } from './main.module';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  app.useGlobalPipes(new ValidationPipe());

  if (process.env.NODE_ENV || 'development' === 'development') {
    renderSwagger(app);
  }

  await app.listen(3000);
}

async function renderSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Skills API')
    .setDescription('The Skills API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
    deepScanRoutes: true,
  };

  await SwaggerModule.loadPluginMetadata(metadata);

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('swagger', app, document, {
    jsonDocumentUrl: 'swagger/json',
  });
}

bootstrap();
