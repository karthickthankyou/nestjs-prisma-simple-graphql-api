import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const allowedOrigins = process.env.ALLOWED_ORIGINS.split(',')

  console.log(allowedOrigins)

  app.enableCors({
    origin: allowedOrigins,
    allowedHeaders: '*',
    methods: '*',
  })
  await app.listen(3000)
}
bootstrap()
