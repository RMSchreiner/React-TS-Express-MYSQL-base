
import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

//tsconfig.json additions for typeorm
//"experimentalDecorators": true,
//"strictPropertyInitialization": false


@Entity()
export class DataEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
}