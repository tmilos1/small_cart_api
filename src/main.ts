import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NotFoundInterceptor } from './not-found-interceptor.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new NotFoundInterceptor());
  await app.listen(3000);
}
bootstrap();
