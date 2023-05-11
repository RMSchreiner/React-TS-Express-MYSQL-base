
import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

//tsconfig.json additions for typeorm
//"experimentalDecorators": true,
//"strictPropertyInitialization": false


@Entity()
export class DataEntity {
  @PrimaryGeneratedColumn()
  userID: number;

  @Column()
  message: string;

  @Column()
  messageResponse: string;
}