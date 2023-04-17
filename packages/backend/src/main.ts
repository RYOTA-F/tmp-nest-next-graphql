import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe())

  app.enableCors({
    origin: process.env.ENEBLE_CORS_ORIGIN,
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
    methods: 'POST',
  })

  await app.listen(3000)
}
bootstrap()
