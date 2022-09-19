import { Exclude } from "class-transformer";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./user.entity";
import { v4 as uuid } from 'uuid'

@Entity("user_info")
export class UserInfo {
  @PrimaryColumn("uuid")
  readonly id: string;

  @ManyToOne(() => User, (user) => user.id, {
    onDelete: "CASCADE",
  })
  user: User;

  @Column({ nullable: true })
  telephone: number;

  @Column({ length: 251 })
  email: string;

  @Column({ length: 250 })
  @Exclude()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
  constructor() {
    if (!this.id) {
        this.id = uuid()
    }
  }
}