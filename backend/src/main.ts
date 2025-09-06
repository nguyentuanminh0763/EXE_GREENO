import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; // 👈 Thêm dòng import này

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 👇 THÊM ĐOẠN CODE CẤU HÌNH SWAGGER VÀO ĐÂY
  const config = new DocumentBuilder()
    .setTitle('Greeno API') // Tiêu đề API
    .setDescription('API for Greeno dish soap e-commerce website') // Mô tả
    .setVersion('1.0') // Phiên bản
    .addTag('products') // Thêm tag để nhóm các API
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // 👈 Setup Swagger tại đường dẫn /api
  // 👆 KẾT THÚC ĐOẠN CODE THÊM VÀO

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
