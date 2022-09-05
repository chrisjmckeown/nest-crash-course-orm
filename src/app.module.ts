import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabasesModule } from './databases/databases.module';
import { NewTablesModule } from './newTable/newTable.module';

@Module({
  imports: [DatabasesModule, NewTablesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
