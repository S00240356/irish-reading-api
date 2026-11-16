import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sentence{
  @PrimaryGeneratedColumn()
  id: number;
  
    @Column()
    text: string;
}
