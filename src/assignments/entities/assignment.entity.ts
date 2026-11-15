import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Assignment {
  @PrimaryGeneratedColumn()
  id: number;
    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    createdDate: Date;
}
