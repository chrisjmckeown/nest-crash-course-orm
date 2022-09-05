import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'firstName', type: 'text' })
  firstName: string;

  @Column({ name: 'lastName', type: 'text' })
  lastName: string;

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
