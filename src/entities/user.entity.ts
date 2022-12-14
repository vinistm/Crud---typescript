import {
    Column,
    Entity,
    JoinTable,
    OneToMany,
    PrimaryColumn,
    CreateDateColumn,
    UpdateDateColumn
  
  } from "typeorm";
import { UserInfo } from "./userInfo.entity";
import { v4 as uuid } from 'uuid'
import { Exclude } from "class-transformer";


@Entity("user")
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ length: 250 })
  name: string;


  @Column({ length: 250 })
  @Exclude()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany((type) => UserInfo, (userInfo) => userInfo.user, {
    eager: true,
  })
  @JoinTable()
  userInfo: UserInfo[];
  constructor() {
    if (!this.id) {
        this.id = uuid()
    }
  }
}