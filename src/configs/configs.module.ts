import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.dev', '.env.qa', '.env.stg', '.env.prod', '.env'],
    }),
  ],
})
export class ConfigsModule {}
