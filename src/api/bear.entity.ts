import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';

@Entity()
export class Bear {
  constructor(name, kdRatio, loveToSuckCocks) {
    this.name = name;
    this.kdRatio = kdRatio;
    this.loveToSuckCocks = loveToSuckCocks;
  }

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  name!: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  kdRatio!: string;

  @Column({ nullable: false })
  loveToSuckCocks!: boolean;
}
