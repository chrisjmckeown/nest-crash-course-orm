import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewTable } from './entities/newTable.entity';

@Injectable()
export class NewTablesService {
  constructor(
    @InjectRepository(NewTable)
    private newTableRepository: Repository<NewTable>,
  ) {}

  async findAll(): Promise<NewTable[]> {
    return this.newTableRepository.find({ relations: ['academicPeriods'] });
  }
}
