import { Controller, Get } from '@nestjs/common';
import { NewTablesService } from './newTable.service';
import { NewTable } from './entities/newTable.entity';

@Controller('period-types')
export class NewTablesController {
  constructor(private readonly newTablesService: NewTablesService) {}

  @Get()
  async findAll(): Promise<NewTable[]> {
    return this.newTablesService.findAll();
  }
}
