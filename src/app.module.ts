import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabasesModule } from './databases/databases.module';
import { NewTablesModule } from './models/newTable/newTable.module';
import { UserssModule } from './models/Users/users.module';

@Module({
  imports: [DatabasesModule, NewTablesModule, UserssModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
