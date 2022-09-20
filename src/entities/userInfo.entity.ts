import { Exclude } from "class-transformer";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { User } from "./user.entity";
import { v4 as uuid } from 'uuid'

@Entity("userInfo")
export class UserInfo {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => User, (user) => user.id, {
    onDelete: "CASCADE",
  })
  user: User;

  @Column({ nullable: true })
  telephone: number;

  @Column({ length: 251 })
  email: string;

}