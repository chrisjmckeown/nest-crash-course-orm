import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum AcademicNewTable {
  SEMESTER = 'SEMESTER',
  TERM = 'TERM',
  TRIMESTER = 'TRIMESTER',
  YEAR = 'YEAR',
}

@Entity('new_table')
export class NewTable {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', type: 'text' })
  name: string;

  @Column({ name: 'lastName', type: 'text' })
  lastName: string;

  @Column({ name: 'academic_new_table', nullable: true, type: 'text' })
  academicNewTable: AcademicNewTable;

  /* "created_at" - When the period type was created */
  @CreateDateColumn({ name: 'created', type: 'timestamptz' })
  createdAt: Date;

  /* "updated_at" - When the period type was last updated */
  @UpdateDateColumn({ name: 'modified', type: 'timestamptz' })
  updatedAt: Date;

  /* "deleted_at" - When and if a period type has been deleted */
  @DeleteDateColumn({ name: 'deleted', type: 'timestamptz', nullable: true })
  deletedAt: Date;
}
