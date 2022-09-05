import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewTable } from './entities/newTable.entity';
import { NewTablesController } from './newTable.controller';
import { NewTablesService } from './newTable.service';

@Module({
  imports: [TypeOrmModule.forFeature([NewTable])],
  controllers: [NewTablesController],
  providers: [NewTablesService],
})
export class NewTablesModule {}
